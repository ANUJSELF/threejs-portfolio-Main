import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Links = ({ font }) => {
  const z = 83;
  const x = -0.5;
  const z_sub = 8;
  const text_angle = [Math.PI / 2 - Math.PI / 8, Math.PI, 0];

  const textRefs = useRef([]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.position.y = Math.sin(elapsedTime + index) * 0.5; // Floating effect
      }
    });
  });

  const links = [
    { name: "HackerRank", position: [x, 0.1, z] },
    { name: "CodeChef", position: [x, 0.1, z - z_sub] },
    { name: "LeetCode", position: [x, 0.1, z - z_sub * 2] },
    { name: "LinkedIn", position: [x, 0.1, z - z_sub * 3] },
    { name: "GitHub", position: [x, 0.1, z - z_sub * 4] },
  ];

  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[x + 2, 0.01, 90]}>
        <Text3D font={font} size={3} height={1}>
          Links
        </Text3D>
        <meshStandardMaterial attach="material" color="red" emissive="red" emissiveIntensity={1.5} />
      </mesh>

      <group>
        {links.map((link, index) => (
          <mesh
            key={index}
            rotation={text_angle}
            position={link.position}
            ref={(el) => (textRefs.current[index] = el)}
          >
            <Text3D font={font} size={1} height={0.1}>
              {link.name}
            </Text3D>
            <meshStandardMaterial attach="material" color="white" emissive="white" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </>
  );
};

export default Links;

