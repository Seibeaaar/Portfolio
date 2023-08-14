import { Suspense, useRef } from "react";
import { Canvas, useFrame, Euler } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from "@react-three/drei";

import { random } from "maath";

const Stars = (props: any) => {
  const ref = useRef<Euler>(null);

  useFrame((_state, delta) => {
    ref.current!.rotation.x -= delta / 10;
    ref.current!.rotation.y -= delta / 15;
  });

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array;
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points {...props} ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial 
          transparent
          color="#F272C8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{
          position: [0, 0, 1]
        }}
      >
        <Suspense fallback={null}>
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas;