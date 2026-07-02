import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

/* Soft round sprite for the nodes (so points glow instead of being squares). */
function useCircleTexture() {
  return useMemo(() => {
    const size = 64;
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(255,255,255,0.85)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    return tex;
  }, []);
}

/* Build a node graph: points in a flattened sphere, edges between near neighbours. */
function useNetwork({ count, radius, maxDist }) {
  return useMemo(() => {
    const cA = new THREE.Color("#a78bfa"); // violet
    const cB = new THREE.Color("#22d3ee"); // cyan
    const cC = new THREE.Color("#f472b6"); // pink

    const pts = [];
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random());
      const theta = ((i * 2.399963) % (Math.PI * 2)); // golden-angle spread
      const phi = Math.acos(1 - 2 * ((i + 0.5) / count));
      const jitter = 0.55;
      const x = r * Math.sin(phi) * Math.cos(theta) + (Math.random() - 0.5) * jitter;
      const y =
        r * Math.sin(phi) * Math.sin(theta) * 0.72 + (Math.random() - 0.5) * jitter;
      const z = r * Math.cos(phi) + (Math.random() - 0.5) * jitter;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      pts.push(new THREE.Vector3(x, y, z));

      const t = (x / radius + 1) / 2;
      const col =
        t < 0.5
          ? cA.clone().lerp(cB, t * 2)
          : cB.clone().lerp(cC, (t - 0.5) * 2);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      // a few larger "hub" nodes
      sizes[i] = Math.random() < 0.18 ? 0.32 : 0.14;
    }

    const linePos = [];
    const lineCol = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) {
          linePos.push(
            pts[i].x,
            pts[i].y,
            pts[i].z,
            pts[j].x,
            pts[j].y,
            pts[j].z
          );
          for (const k of [i, j]) {
            lineCol.push(colors[k * 3], colors[k * 3 + 1], colors[k * 3 + 2]);
          }
        }
      }
    }

    return {
      positions,
      colors,
      sizes,
      linePositions: new Float32Array(linePos),
      lineColors: new Float32Array(lineCol),
    };
  }, [count, radius, maxDist]);
}

function Network() {
  const group = useRef();
  const tex = useCircleTexture();
  const net = useNetwork({ count: 78, radius: 4.2, maxDist: 1.7 });

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.05;
    const { x, y } = state.pointer;
    // gentle parallax toward the pointer
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y * 0.25 + Math.sin(state.clock.elapsedTime * 0.1) * 0.05,
      0.03
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      x * 0.1,
      0.03
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      x * 0.5,
      0.03
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      y * 0.4,
      0.03
    );
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[net.linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[net.lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[net.positions, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[net.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.34}
          map={tex}
          vertexColors
          transparent
          sizeAttenuation
          alphaTest={0.01}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={["#06060b", 8, 16]} />
        <Network />
        <Sparkles
          count={70}
          scale={[16, 10, 8]}
          size={1.6}
          speed={0.25}
          opacity={0.5}
          color="#c7b8ff"
        />
      </Suspense>
    </Canvas>
  );
}
