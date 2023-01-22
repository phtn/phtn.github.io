import { FC, useRef, useState } from "react";
import { Canvas } from '@react-three/fiber'
import { useSpring, animated } from "@react-spring/three";



const HyperButton: FC = () => {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 80 }}
        shadows
      >
        <fog attach="fog" args={["white", 0, 60]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          color={"white"}
          intensity={0.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />

        <Revolver />

      </Canvas>
    </>
  )
}

const Revolver = () => {
  const [hover, setHover] = useState(false)
  const { scale }: any = useSpring({ scale: hover ? 5 : 4.5 })
  const { rotation }: any = useSpring({ rotation: hover ? [0, 0, 0] : [0, 0, 0] })
  const meshRef = useRef(null!)
  return (
    <>
      <animated.mesh
        scale={scale}
        ref={meshRef}
        // position={[0, 0, 0]}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        rotation={rotation}
        castShadow
      >
        {/* <Plane
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          args={[200, 500]}
        >
          <meshStandardMaterial attach="material" color="white" />
        </Plane> */}
        <boxGeometry />
        <meshStandardMaterial color={'gray'} />

      </animated.mesh>
    </>
  )
}

export default HyperButton