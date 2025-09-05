"use client";

import { Suspense, useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

function JupiterModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Create a procedural Jupiter texture
  const jupiterTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      // Create Jupiter-like bands
      const gradient = ctx.createLinearGradient(0, 0, 0, 512);
      gradient.addColorStop(0, "#b36d28");
      gradient.addColorStop(0.3, "#eab676");
      gradient.addColorStop(0.5, "#b36d28");
      gradient.addColorStop(0.7, "#8b4513");
      gradient.addColorStop(1, "#b36d28");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 512);
      
      // Add some band details
      ctx.fillStyle = "rgba(139, 69, 19, 0.3)";
      for (let i = 0; i < 5; i++) {
        ctx.fillRect(0, 100 + i * 80, 512, 20);
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Idle rotation
      meshRef.current.rotation.y += 0.005;
      
      // Mouse parallax
      meshRef.current.rotation.x = mousePosition.y * 0.1;
      meshRef.current.rotation.z = mousePosition.x * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial
        map={jupiterTexture}
        emissive="#b36d28"
        emissiveIntensity={0.1}
        roughness={0.8}
        metalness={0.1}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#16f2f2" />
      <Environment preset="night" />
      <JupiterModel />
    </>
  );
}

export default function JupiterCanvas() {
  const [isClient, setIsClient] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Don't render on server or if reduced motion is preferred
  if (!isClient || prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        >
          <source src="/video/jupiter.webm" type="video/webm" />
          <source src="/video/jupiter.mp4" type="video/mp4" />
          {/* Fallback image */}
          <div className="w-full h-full bg-gradient-to-br from-jupiter-accent to-ion-neon rounded-lg flex items-center justify-center">
            <div className="text-jupiter-deep font-mono text-2xl">JUPITER</div>
          </div>
        </video>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense
          fallback={
            <mesh>
              <sphereGeometry args={[2, 32, 32]} />
              <meshBasicMaterial color="#b36d28" />
            </mesh>
          }
        >
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
