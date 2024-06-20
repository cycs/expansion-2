import * as THREE from "three";

const generateRandomPointsInShape = (
  shape: THREE.Shape,
  numPoints: number
): THREE.Vector2[] => {
  const points: THREE.Vector2[] = [];
  const geometry = new ShapeBufferGeometry(shape);
  // const boundingBox = shape.getBoundingBox(new THREE.Box3())
  const boundingBox = new THREE.Box3().setFromObject({ geometry });

  for (let i = 0; i < numPoints; i++) {
    let point: THREE.Vector2;
    do {
      const x =
        boundingBox.min.x +
        Math.random() * (boundingBox.max.x - boundingBox.min.x);
      const y =
        boundingBox.min.y +
        Math.random() * (boundingBox.max.y - boundingBox.min.y);
      point = new THREE.Vector2(x, y);
    } while (!shape.containsPoint(point));
    points.push(point);
  }

  return points;
};
