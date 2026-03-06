"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props: any) {
  const ref = useRef<any>(null);
  
  // Create 5000 random points in a sphere of radius 1.5
  const sphere = useMemo(() => {
     const positions = new Float32Array(5000 * 3);
     // Using maath generator. It mutates the array in place.
     random.inSphere(positions, { radius: 1.5 });
     // Fix NaN values if any occur
     for(let i=0; i < positions.length; i++){
        if(isNaN(positions[i])) positions[i] = 0;
     }
     return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-20 bg-[#050510]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
