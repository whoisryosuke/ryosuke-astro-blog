import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';
import React, { Suspense } from 'react'
import Box from '../Box/Box';
import Scene from './Scene';

type Props = {}

export const SceneWaves = (props: Props) => {
  return (
    <Box style={{width: '100%', height: '300px', position: 'absolute', top:0, left:0, zIndex:-1,
    
      WebkitMaskImage: `linear-gradient(to top, transparent 25%, black 75%)`,
      // '-webkit-mask-image': `linear-gradient(to top, transparent 25%, black 75%)`,
    
    }}>
      <Canvas
        // concurrent
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#FFF");
        }}
        shadows
      >
        {/* <Stats /> */}
        {/* <OrbitControls /> */}
        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        <EffectComposer>
          <DepthOfField
            focusDistance={2.00}
            focalLength={0.1}
            bokehScale={2.0}
          />
        </EffectComposer>
      </Canvas>
    </Box>
  )
}

export default SceneWaves