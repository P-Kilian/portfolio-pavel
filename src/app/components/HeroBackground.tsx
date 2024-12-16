import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import modelPath from "@/app/assets/3d/Lowrespc.glb";

const HeroBackground = ({ scale, position, rotationX, rotationY }) => {
  const computerRef = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, computerRef);

  useEffect(() => {
    if (actions["Idle"]) {
      actions["Idle"].play();
    }
  }, [actions]);

  return (
    <mesh
      ref={computerRef}
      scale={scale}
      position={position}
      rotation={[rotationX, rotationY, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

const ComputerCanvas = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainer.current.scrollTop;
      const RotationXValue = scrollTop * 0.1;
      const RotationYValue = scrollTop * 0.1;
      setRotationX(RotationXValue);
      setRotationY(RotationYValue);
    };

    // Add scroll event listener
    if (scrollContainer.current) {
      scrollContainer.current.addEventListener("scroll", handleScroll);
    }

    // Cleanup
    return () => {
      if (scrollContainer.current) {
        scrollContainer.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainer]);

  return (
    <Canvas
      className="h-full w-full bg-transparent z-10"
      camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <HeroBackground
          scale={scale}
          position={position}
          rotationX={rotationX}
          rotationY={rotationY}
        />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
