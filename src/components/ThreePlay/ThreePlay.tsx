import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { softShadows, PresentationControls } from "@react-three/drei";
import Macbook from "./Macbook";
import { Spinner } from "react-bootstrap";
softShadows();
const Box = () => {
  const myMesh = useRef();
  const [hovered, setHover] = useState(false);
  useFrame(({ clock }) => {
    myMesh!.current.rotation.y =
      document.body.getBoundingClientRect().top / 500;
  });
  const { viewport } = useThree();
  return (
    <mesh
      ref={myMesh}
      scale={viewport.width / 10}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial
        attach="material"
        color={hovered ? "#ffc857" : "#DB3A34"}
      />
    </mesh>
  );
};
export const ThreePlay = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight intesity={6} position={[0, 5, 10]} />
      <PresentationControls
        global={true} // Spin globally or by dragging the model
        cursor={false} // Whether to toggle cursor style on drag
        snap={true} // Snap-back to center (can also be a spring config)
        speed={0.5} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        rotation={[0, 0, 0]} // Default rotation
        polar={[-Math.PI * 2, Math.PI * 2]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
      >
        <Suspense fallback={null}>
          <Macbook />
        </Suspense>
      </PresentationControls>
    </Canvas>
  );
};
