'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const ButterflyModel = () => {
  // Load the GLB model from the public folder
  const { scene, animations } = useGLTF('/butterfly.glb');
  const group = useRef<THREE.Group>(null!);
  const [mixer] = useState(() => new THREE.AnimationMixer(scene));

  useEffect(() => {
    if (animations && animations.length > 0) {
      // Play the first animation (usually the wing flap)
      const action = mixer.clipAction(animations[0]);
      action.play();
    }
  }, [animations, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);

    // Convert mouse coordinates to 3D space
    // state.mouse is -1 to +1
    const mouseX = state.mouse.x * (state.viewport.width / 2);
    const mouseY = state.mouse.y * (state.viewport.height / 2);

    // Smoothly follow the mouse position (Lerp)
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, mouseX, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, mouseY, 0.05);

    // Make the butterfly "lean" towards the direction of movement
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.8, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.5, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -state.mouse.x * 0.5, 0.05);
  });

  return (
    <group ref={group} scale={0.014}>
      <primitive object={scene} />
    </group>
  );
};

const Butterfly = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] opacity-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

        <Suspense fallback={null}>
          <Float
            speed={3}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            floatingRange={[-0.2, 0.2]}
          >
            <ButterflyModel />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Butterfly;
