import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { Decal } from "@react-three/drei";
import { ChipVisualTypeEnum } from "./types";

const getChipBaseConfig = (type: ChipVisualTypeEnum) => {
  switch (type) {
    case "arobase":
      return {
        color: "#8be6e9",
        logoURL: new URL("/arobase.svg", import.meta.url).href,
      };
    case "cart":
      return {
        color: "#ffd8e5",
        logoURL: new URL("/arobase.svg", import.meta.url).href,
      };
    case "euro":
      return {
        color: "#ffe738",
        logoURL: new URL("/arobase.svg", import.meta.url).href,
      };
    case "heart":
      return {
        color: "#ff7a8b",
        logoURL: new URL("/arobase.svg", import.meta.url).href,
      };
    case "magnifyingGlass":
      return {
        color: "#c6f8a6",
        logoURL: new URL("/arobase.svg", import.meta.url).href,
      };
    case "trendArrow":
      return {
        color: "#91c1e2",
        logoURL: new URL("/arobase.svg", import.meta.url).href,
      };
    case "goToArrow":
      return {
        color: "#91c1e2",
        logoURL: new URL("/arobase.svg", import.meta.url).href,
      };
    case "thumbsUp":
      return {
        color: "#71a1f9",
        logoURL: new URL("/arobase.svg", import.meta.url).href,
      };

    default:
      return {
        color: "#ffe738",
        logoURL: new URL("/arobase.svg", import.meta.url).href,
      };
  }
};

interface ChipProps {
  diameter: number;
  position: [number, number, number];
  type: ChipVisualTypeEnum;
}

export const Chips: React.FC<ChipProps> = ({ diameter, position, type }) => {
  const meshRef = useRef<Mesh>(null!);

  const { color, logoURL } = getChipBaseConfig(type);
  const logoTexture = useLoader(THREE.TextureLoader, logoURL);

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        receiveShadow
        rotation={[
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(45),
          0,
        ]}
      >
        <cylinderGeometry args={[diameter, diameter, diameter / 8, 64]} />
        <meshStandardMaterial color={color} side={THREE.DoubleSide} />
        <Decal
          polygonOffsetFactor={-2}
          position={[0, 1, -0.1]}
          scale={diameter}
          map={logoTexture}
        />
      </mesh>
    </group>
  );
};
