"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";

function ChipMesh({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Main chip body */}
      <mesh>
        <planeGeometry args={[0.55, 0.44]} />
        <meshStandardMaterial color="#D4A853" metalness={0.95} roughness={0.08} />
      </mesh>
      {/* Contact pad borders */}
      {[-0.1, 0, 0.1].map((y) => (
        <mesh key={`h-${y}`} position={[0, y, 0.001]}>
          <planeGeometry args={[0.53, 0.006]} />
          <meshStandardMaterial color="#B08930" metalness={0.9} roughness={0.12} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.001]}>
        <planeGeometry args={[0.006, 0.42]} />
        <meshStandardMaterial color="#B08930" metalness={0.9} roughness={0.12} />
      </mesh>
      {[-0.12, 0.12].map((x) => (
        <mesh key={`v-${x}`} position={[x, 0, 0.001]}>
          <planeGeometry args={[0.006, 0.2]} />
          <meshStandardMaterial color="#B08930" metalness={0.9} roughness={0.12} />
        </mesh>
      ))}
    </group>
  );
}

function ContactlessSymbol({ position }: { position: [number, number, number] }) {
  const lineObjects = useMemo(() => {
    return [0.06, 0.11, 0.16].map((r) => {
      const curve = new THREE.EllipseCurve(0, 0, r, r, -Math.PI * 0.35, Math.PI * 0.35, false, 0);
      const points = curve.getPoints(16);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: "#ffffff", opacity: 0.4, transparent: true });
      return new THREE.Line(geometry, material);
    });
  }, []);

  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      {lineObjects.map((obj, i) => (
        <primitive key={i} object={obj} />
      ))}
    </group>
  );
}

export function CreditCard3D() {
  const groupRef = useRef<Group>(null);
  const { pointer } = useThree();

  const cardTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1120;
    canvas.height = 700;
    const ctx = canvas.getContext("2d")!;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 1120, 700);
    grad.addColorStop(0, "#1E3A8A");
    grad.addColorStop(0.45, "#2563EB");
    grad.addColorStop(1, "#7C3AED");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(0, 0, 1120, 700, 28);
    ctx.fill();

    // Dot pattern overlay
    ctx.fillStyle = "rgba(255,255,255,0.03)";
    for (let x = 0; x < 1120; x += 18) {
      for (let y = 0; y < 700; y += 18) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Wave decoration at bottom
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.quadraticCurveTo(280, 440, 560, 500);
    ctx.quadraticCurveTo(840, 560, 1120, 500);
    ctx.lineTo(1120, 700);
    ctx.lineTo(0, 700);
    ctx.closePath();
    ctx.fill();

    // Diagonal light streak
    const streakGrad = ctx.createLinearGradient(300, 0, 800, 700);
    streakGrad.addColorStop(0, "rgba(255,255,255,0)");
    streakGrad.addColorStop(0.45, "rgba(255,255,255,0.03)");
    streakGrad.addColorStop(0.55, "rgba(255,255,255,0.03)");
    streakGrad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = streakGrad;
    ctx.fillRect(0, 0, 1120, 700);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetRotX = pointer.y * 0.1;
    const targetRotY = pointer.x * 0.15;
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 2 * delta;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 2 * delta;
    groupRef.current.position.y = Math.sin(Date.now() * 0.0008) * 0.06;
  });

  return (
    <group ref={groupRef}>
      {/* Card body */}
      <RoundedBox args={[4.5, 2.82, 0.05]} radius={0.18} smoothness={4}>
        <meshPhysicalMaterial
          map={cardTexture}
          metalness={0.05}
          roughness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={1.8}
        />
      </RoundedBox>

      {/* Glass overlay */}
      <mesh position={[0, 0, 0.03]}>
        <planeGeometry args={[4.48, 2.8]} />
        <meshPhysicalMaterial transparent opacity={0.04} color="#ffffff" />
      </mesh>

      {/* Chip */}
      <ChipMesh position={[-1.3, 0.35, 0.035]} />

      {/* Contactless icon */}
      <ContactlessSymbol position={[-0.6, 0.35, 0.035]} />

      {/* CARDIUM */}
      <Text
        position={[-1.85, 1.05, 0.035]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="left"
        fontWeight={700}
        letterSpacing={0.08}
      >
        CARDIUM
      </Text>

      {/* Card number */}
      <Text
        position={[0, -0.15, 0.035]}
        fontSize={0.24}
        color="#ffffff"
        anchorX="center"
        letterSpacing={0.2}
      >
        {"4562  ••••  ••••  7834"}
      </Text>

      {/* Cardholder label */}
      <Text
        position={[-1.85, -0.72, 0.035]}
        fontSize={0.08}
        color="rgba(255,255,255,0.4)"
        anchorX="left"
        letterSpacing={0.12}
      >
        CARDHOLDER NAME
      </Text>

      {/* Cardholder name */}
      <Text
        position={[-1.85, -0.9, 0.035]}
        fontSize={0.14}
        color="#ffffff"
        anchorX="left"
        letterSpacing={0.04}
      >
        MEDIA BUYER PRO
      </Text>

      {/* Valid thru label */}
      <Text
        position={[0.8, -0.72, 0.035]}
        fontSize={0.08}
        color="rgba(255,255,255,0.4)"
        anchorX="left"
        letterSpacing={0.12}
      >
        VALID THRU
      </Text>

      {/* Valid thru date */}
      <Text
        position={[0.8, -0.9, 0.035]}
        fontSize={0.14}
        color="#ffffff"
        anchorX="left"
      >
        12/28
      </Text>

      {/* VISA */}
      <Text
        position={[1.85, 1.05, 0.035]}
        fontSize={0.22}
        color="rgba(255,255,255,0.55)"
        anchorX="right"
        fontWeight={700}
        letterSpacing={0.1}
      >
        VISA
      </Text>

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 5]} intensity={50} color="#3B82F6" />
      <pointLight position={[-4, -2, 4]} intensity={25} color="#7C3AED" />
      <spotLight position={[0, 5, 6]} intensity={30} color="#ffffff" angle={0.4} penumbra={0.5} />
    </group>
  );
}
