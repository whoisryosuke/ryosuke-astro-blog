import React, { useMemo, useRef } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import "./material";

type WaveProps = MeshProps & {
  offset: number;
};

const WAVE_SIZE = {
  width: 0.5,
  height: 10,
  depth: 0.05,
  widthSegment: 2,
  heightSegment: 32
};

function Wave({ offset, ...props }: WaveProps) {
  const geom = useRef();
  useFrame((state) => {
    geom.current.material.uniforms.time.value = state.clock.getElapsedTime();
    geom.current.material.uniforms.offset.value = offset;
    // geom.current.geometry.verticesNeedUpdate = true
  });

  return (
    <mesh
      ref={geom}
      rotation={[-Math.PI / 2, 0, 0]}
      castShadow
      receiveShadow
      {...props}
    >
      <boxBufferGeometry
        args={[
          WAVE_SIZE.width,
          WAVE_SIZE.height,
          WAVE_SIZE.depth,
          WAVE_SIZE.widthSegment,
          WAVE_SIZE.heightSegment
        ]}
      />
      <waveMaterial />
      {/* <meshBasicMaterial wireframe /> */}
    </mesh>
  );
}

export default Wave;
