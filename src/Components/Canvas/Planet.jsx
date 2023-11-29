import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import React, { useRef, useEffect } from 'react';

import CanvasLoader from '../Loader'

const Planetary = () => {
  const { scene, animations } = useGLTF('./Hologram planetary/scene.gltf');
  const group = useRef();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Reproduce la animación 'MyAnimation' cuando el componente se monta
    actions.Take.play();
  }, [actions]);


  return (
    <group ref={group}>
     <hemisphereLight intensity={0.7} />
     <pointLight intensity={5000}/>
      <spotLight
        position={[0, 186, 0]}
        angle={Math.PI / 4}
        penumbra={0.8}
        intensity={90000}
        castShadow
      />

      <spotLight
        position={[186, 0, 0]}
        angle={Math.PI / 4}
        penumbra={0.8}
        intensity={90000}
        castShadow
      />
      <primitive object={scene}
        scale={0.90}
        position={[58, -15, 186]}
        rotation-y={0}/>
    </group>
  );
};

const PlanetaryCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [60, 80, 0], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2} // Restringe la inclinación máxima a 90 grados (horizontal)
          minPolarAngle={Math.PI / 2} // Restringe la inclinación mínima a -90 grados (horizontal
        />
        <Planetary />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default PlanetaryCanvas;
