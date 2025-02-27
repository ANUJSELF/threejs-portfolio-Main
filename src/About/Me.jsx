import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Me = ({ font }) => {
  const textRef = useRef(null);
  const welcomeRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    // Add Squid Game-like animation
    if (textRef.current) {
      textRef.current.rotation.x = -Math.PI + Math.sin(elapsedTime * 0.5);
      textRef.current.position.y = Math.sin(elapsedTime) * 0.5;
    }

    if (welcomeRef.current) {
      welcomeRef.current.rotation.x = -Math.PI + Math.sin(elapsedTime * 0.3);
    }
  });

  return (
    <>
      {/* Welcome Text (Glowing Red - Squid Game Theme) */}
      <mesh position={[130, 5, 110]} rotation={[-Math.PI / 2, 0, -Math.PI]} ref={welcomeRef}>
        <Text3D font={font} size={10} height={2}>
          Welcome!
        </Text3D>
        <meshStandardMaterial attach="material" color="red" emissive="red" emissiveIntensity={2} />
      </mesh>

      {/* Your Name and Profile Info */}
      <mesh position={[130, 2, 110]} rotation={[-Math.PI / 2, 0, -Math.PI]} ref={textRef}>
        <Text3D font={font} size={4} height={1}>
          Hi, I'm Anuj Tiwari
        </Text3D>
        <meshStandardMaterial attach="material" color="white" emissive="white" emissiveIntensity={0.8} />
      </mesh>

      <mesh position={[130, 0, 110]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <Text3D font={font} size={2} height={0.5}>
          Full Stack Developer | 3D Enthusiast
        </Text3D>
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    </>
  );
};

export default Me;
