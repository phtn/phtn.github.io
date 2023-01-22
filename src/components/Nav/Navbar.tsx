import { useSpring, animated } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useRef, useState } from "react";
import { Mesh } from "three";
import Menu from "./Menu";

type MeshType = {
  posX: number;
  posY: number;
  opacity?: number;
};

const Navbar: FC = () => {
  const Boxes1 = [];
  const Boxes2 = [];
  for (let i = -30; i <= 30; i++) {
    Boxes1.push(i);
    Boxes2.push(i - 0.5);
  }
  // darkgray -> #282c34
  return (
    <>
      <Menu />
      <Canvas>
        <Suspense fallback={<Loading />}>
          <ambientLight intensity={0.0001} />
          <directionalLight color="lightslategrey" position={[0, 5, 10]} />

          {Boxes2.map((i) => (
            <WhipBox posX={i} posY={-0.8} key={i} />
          ))}
          {Boxes1.map((i) => (
            <WhipBox posX={i} posY={0.2} key={i} />
          ))}
          {Boxes2.map((i) => (
            <WhipBox posX={i} posY={1.2} key={i} />
          ))}
          {Boxes1.map((i) => (
            <WhipBox posX={i} posY={2.2} key={i} />
          ))}
        </Suspense>
      </Canvas>
    </>
  );
};

const WhipBox: FC<MeshType> = (props) => {
  const { posX, posY } = props;

  const [hover, setHover] = useState(false);
  let meshRef = useRef<Mesh>(null!);

  const handlePointerEnter = () => {
    setHover(true);
  };
  const handlePointerLeave = () => {
    setHover(false);
  };
  const { position }: any = useSpring({
    position: hover ? [posX, posY, -2.5] : [posX, posY, 1],
  });
  // const { opacity }: any = useSpring({ color: hover ? 0.2 : 0.9 })
  return (
    <animated.mesh
      scale={1}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      ref={meshRef}
      position={position}
    >
      <boxGeometry />
      <meshPhongMaterial opacity={1} color="slategrey" />
    </animated.mesh>
  );
};

const Loading: FC = () => {
  return (
    <>
      <span style={{ height: "200px" }}>loading</span>
    </>
  );
};

export default Navbar;
