import React, { useRef, useEffect, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Chips } from "./Chips";
import { OrbitControls, useHelper } from "@react-three/drei";
import { Line } from "@react-three/drei";
import { ChipVisualTypeEnum } from "./types";

const createCrossShape = (canvasHeight: number) => {
  const size = canvasHeight;
  const barWidth = size / 8;
  const shape = new THREE.Shape();
  const halfSize = size / 2;
  const halfBarWidth = barWidth / 2;

  // Horizontal bar
  shape.moveTo(-halfBarWidth, halfSize);
  shape.lineTo(halfBarWidth, halfSize);
  shape.lineTo(halfBarWidth, halfBarWidth);
  shape.lineTo(halfSize, halfBarWidth);
  shape.lineTo(halfSize, -halfBarWidth);
  shape.lineTo(halfBarWidth, -halfBarWidth);
  shape.lineTo(halfBarWidth, -halfSize);
  shape.lineTo(-halfBarWidth, -halfSize);
  shape.lineTo(-halfBarWidth, -halfBarWidth);
  shape.lineTo(-halfSize, -halfBarWidth);
  shape.lineTo(-halfSize, halfBarWidth);
  shape.lineTo(-halfBarWidth, halfBarWidth);
  shape.lineTo(-halfBarWidth, halfSize);

  // Apply rotation to the shape
  const rotationMatrix = new THREE.Matrix3().set(
    Math.cos(Math.PI / 4),
    -Math.sin(Math.PI / 4),
    0,
    Math.sin(Math.PI / 4),
    Math.cos(Math.PI / 4),
    0,
    0,
    0,
    1
  );

  // Rotate the shape
  const rotationAngle = Math.PI / 4;
  const rotatedPoints = shape.getPoints().map((point) => {
    const rotatedPoint = new THREE.Vector2().copy(point);
    rotatedPoint.rotateAround(new THREE.Vector2(0, 0), rotationAngle);
    return rotatedPoint;
  });

  // Create a new shape with rotated points
  const rotatedShape = new THREE.Shape(rotatedPoints);

  return rotatedShape;

  return shape;
};

const isPointInShape = (point: THREE.Vector2, shape: THREE.Shape): boolean => {
  let inside = false;
  const points = shape.getPoints();

  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const xi = points[i].x,
      yi = points[i].y;
    const xj = points[j].x,
      yj = points[j].y;

    const intersect =
      yi > point.y !== yj > point.y &&
      point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
};

const generateRandomPointsInShape = (
  shape: THREE.Shape,
  numPoints: number
): THREE.Vector2[] => {
  const points: THREE.Vector2[] = [];

  const boundingBox = new THREE.Box2().setFromPoints(shape.getPoints());

  for (let i = 0; i < numPoints; i++) {
    let point: THREE.Vector2;
    let inside = false;
    do {
      const x =
        boundingBox.min.x +
        Math.random() * (boundingBox.max.x - boundingBox.min.x);
      const y =
        boundingBox.min.y +
        Math.random() * (boundingBox.max.y - boundingBox.min.y);
      point = new THREE.Vector2(x, y);
      inside = isPointInShape(point, shape);
    } while (!inside);
    points.push(point);
  }

  return points;
};

const convertToSceneCoordinates = (
  [x, y, z]: [number, number, number],
  size: { width: number; height: number }
): [number, number, number] => {
  return [(x * size.width) / 5 / 2, (y * size.width) / 5 / 2, z];
};

type ChipProps = {
  key: number;
  diameter: number;
  position: [number, number, number];
};

export const FlyingChips = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const targetRef = useRef<THREE.Object3D>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const [showSpotLightHelper, setShowSpotLightHelper] = useState(true);

  useEffect(() => {
    if (spotLightRef.current && showSpotLightHelper) {
      const helper = new THREE.SpotLightHelper(spotLightRef.current);
      const scene = spotLightRef.current.parent;
      scene?.add(helper);
      return () => {
        scene?.remove(helper);
      };
    }
  }, [showSpotLightHelper]);

  const bottomRightCorner: [number, number, number] = [-1, -1, 0];
  const bottomRightPosition = convertToSceneCoordinates(
    bottomRightCorner,
    canvasSize
  );

  useEffect(() => {
    const updateSize = () => {
      const canvas = document.querySelector("canvas");
      if (canvas) {
        setCanvasSize({
          width: canvas.clientWidth,
          height: canvas.clientHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const Light = () => {
    const dirLight = useRef<THREE.DirectionalLight>(null);

    return (
      <>
        <directionalLight color={"#005F00"} intensity={1} ref={dirLight} />
      </>
    );
  };

  const chipsConfig: {
    id: number;
    position: [number, number, number];
    diameter: number;
    type: ChipVisualTypeEnum;
  }[] = [
    // Cross bottom left

    { id: 1, position: [0.8, -0.1, 1], diameter: 3, type: "trendArrow" },

    { id: 2, position: [1.3, -0.6, 1], diameter: 3, type: "trendArrow" },
    { id: 3, position: [0.7, -0.8, 2], diameter: 3, type: "euro" },

    { id: 4, position: [1.9, -1.4, 2], diameter: 3, type: "heart" },
    { id: 5, position: [1.3, -1.3, 1], diameter: 3, type: "arobase" },

    { id: 6, position: [1.7, -2.1, 1], diameter: 3, type: "trendArrow" },
    { id: 7, position: [1.1, -1.8, 1], diameter: 3, type: "magnifyingGlass" },

    { id: 8, position: [2.7, -2.5, 1], diameter: 3, type: "trendArrow" },
    { id: 9, position: [2.5, -2, 1], diameter: 3, type: "cart" },

    // Cross bottom right

    { id: 11, position: [-0.8, -0.1, 1], diameter: 3, type: "trendArrow" },

    { id: 12, position: [-0.9, -1.3, 1], diameter: 3, type: "trendArrow" },
    { id: 13, position: [-1.3, -1, 2], diameter: 3, type: "heart" },

    { id: 14, position: [-1.9, -1.4, 2], diameter: 3, type: "trendArrow" },
    { id: 15, position: [-1.3, -1.7, 1], diameter: 3, type: "euro" },

    { id: 16, position: [-1.9, -2.1, 1], diameter: 3, type: "cart" },
    { id: 17, position: [-2.5, -1.6, 1], diameter: 3, type: "arobase" },

    { id: 18, position: [-3.1, -2.5, 1], diameter: 3, type: "heart" },
    { id: 19, position: [-2.6, -2.4, 1], diameter: 3, type: "trendArrow" },

    { id: 20, position: [-2.8, -3, 1], diameter: 3, type: "euro" },

    // Cross upper right

    { id: 21, position: [-0.7, 0.7, 1], diameter: 3, type: "arobase" },
    { id: 22, position: [-1.2, 0.6, 1], diameter: 3, type: "magnifyingGlass" },

    { id: 23, position: [-1.5, 1, 2], diameter: 3, type: "heart" },
    { id: 24, position: [-0.8, 1.2, 2], diameter: 3, type: "trendArrow" },

    { id: 25, position: [-1.3, 1.7, 1], diameter: 3, type: "euro" },

    { id: 26, position: [-2, 1.9, 1], diameter: 3, type: "trendArrow" },
    { id: 27, position: [-2.7, 1.8, 1], diameter: 3, type: "cart" },

    { id: 28, position: [-2.2, 2.3, 1], diameter: 3, type: "heart" },
    { id: 29, position: [-2.8, 2.4, 1], diameter: 3, type: "trendArrow" },

    { id: 30, position: [-3, 3, 1], diameter: 3, type: "euro" },

    // Cross upper left

    { id: 31, position: [0.6, 0.7, 1], diameter: 3, type: "heart" },

    { id: 32, position: [1.2, 0.9, 2], diameter: 3, type: "arobase" },
    { id: 33, position: [0.8, 1.2, 2], diameter: 3, type: "magnifyingGlass" },

    { id: 34, position: [1, 1.8, 1], diameter: 3, type: "heart" },
    { id: 35, position: [1.8, 1.5, 1], diameter: 3, type: "euro" },

    { id: 36, position: [1.7, 2.2, 1], diameter: 3, type: "trendArrow" },
    { id: 37, position: [2.3, 2, 1], diameter: 3, type: "trendArrow" },

    { id: 38, position: [2, 2.7, 1], diameter: 3, type: "cart" },
    { id: 39, position: [3, 2.6, 1], diameter: 3, type: "euro" },
  ];

  return (
    <Canvas
      shadows
      ref={canvasRef}
      orthographic
      camera={{ position: [1, 1, -500], zoom: 1 }}
      style={{ position: "absolute" }}
    >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        ref={spotLightRef}
        position={[1, 1, -10000]} // Adjust position here
        // distance={10}
        angle={0.5}
        penumbra={0.3}
        decay={2}
        intensity={1} // Adjust intensity if needed
        target={targetRef.current || undefined}
      />
      <object3D ref={targetRef} position={[0, 0, 0]} />
      {/* Adjust target position */}
      <OrbitControls />
      {chipsConfig.map((chip) => {
        const position = convertToSceneCoordinates(chip.position, canvasSize);

        return (
          <Chips
            key={chip.id}
            diameter={(chip.diameter * canvasSize.width) / 100}
            position={position}
            type={chip.type}
          />
        );
      })}
    </Canvas>
  );
};
