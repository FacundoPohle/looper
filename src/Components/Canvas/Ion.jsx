import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';

import CanvasLoader from '../Loader'

const Ion = () => {
  const { scene, animations } = useGLTF('./robot_playground/scene.gltf');
  const group = useRef();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Reproduce la animación 'MyAnimation' cuando el componente se monta
    actions.Main.play();
  }, [actions]);

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.40} groundColor='black' />
      {/* <pointLight intensity={1} />
      <spotLight
        position={[0, 0, 0]}
        angle={0.8}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive object={scene}
        scale={3.5}
        position-y={-4}
        rotation-y={0} />
    </group>
  );
};

const IonCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 6, 5], fov: 33 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2} // Restringe la inclinación máxima a 90 grados (horizontal)
          minPolarAngle={Math.PI / 2} // Restringe la inclinación mínima a -90 grados (horizontal
        />
        <Ion />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default IonCanvas;
