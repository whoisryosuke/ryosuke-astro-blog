import React from "react";
import Wave from "./Wave/Wave";


const Waves = () => {
  const waves = new Array(9)
    .fill(0)
    .map((_, index) => (
      <Wave key={index} position={[index * 0.6, 0, 0]} offset={index} />
    ));

  return <group position={[-2, 0, 0]} rotation={[0, Math.PI / 10, 0]}>
    {waves}
  </group>;
};

export default Waves;
