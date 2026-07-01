import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useThemeContext } from "../../context/ThemeContext";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const ACCENT: Record<"dark" | "light", string> = {
  dark: "#5b8cff",
  light: "#3d63e0",
};

const NODES: [number, number, number][] = [
  [0, 0.9, 0],
  [1.3, 0.3, 0.4],
  [-1.2, 0.5, -0.3],
  [0.6, -0.7, 0.8],
  [-0.8, -0.9, -0.5],
  [1.5, -0.4, -0.9],
  [-1.6, -0.1, 0.6],
  [0.1, 1.3, -0.8],
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 7],
  [1, 3],
  [1, 5],
  [2, 4],
  [2, 6],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 7],
  [6, 0],
];

function Graph({ color, spin }: { color: string; spin: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (spin && group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={group}>
      {EDGES.map(([a, b], i) => (
        <Line
          key={i}
          points={[NODES[a], NODES[b]]}
          color={color}
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}
      {NODES.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[i === 0 ? 0.09 : 0.055, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={i === 0 ? 1 : 0.85} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroShape() {
  const { theme } = useThemeContext();
  const reducedMotion = usePrefersReducedMotion();
  const color = ACCENT[theme];

  return (
    <div className="pointer-events-none h-full w-full" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        {reducedMotion ? (
          <Graph color={color} spin={false} />
        ) : (
          <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
            <Graph color={color} spin />
          </Float>
        )}
      </Canvas>
    </div>
  );
}
