import { Text3D } from "@react-three/drei";
import React from "react";

const Education = ({ font }) => {
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[40, 0.5, 90]}>
        <Text3D font={font} size={3} height={1}>
          Education
        </Text3D>
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>

      {/* B.Tech - PSIT College of Engineering */}
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[35, 0.1, 84]}
        >
          <Text3D font={font} size={1} height={0.1}>
            PSIT College Of Engineering
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[36, 0.1, 81]}>
          <Text3D font={font} size={1} height={0.1}>
            B.Tech CSE (2020 - 2024)
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 78]}>
          <Text3D font={font} size={1} height={0.1}>
            CGPA: 6.63
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>

      {/* Higher Secondary - K R Education Center */}
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[40, 0.1, 72]}
        >
          <Text3D font={font} size={1} height={0.1}>
            K R Education Center
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 69]}>
          <Text3D font={font} size={1} height={0.1}>
            Higher Secondary (2018)
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 66]}>
          <Text3D font={font} size={1} height={0.1}>
            Percentage: 62.27
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>

      {/* Secondary School - K R Education Center */}
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[40, 0.1, 60]}
        >
          <Text3D font={font} size={1} height={0.1}>
            K R Education Center
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 57]}>
          <Text3D font={font} size={1} height={0.1}>
            Secondary School (2016)
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 54]}>
          <Text3D font={font} size={1} height={0.1}>
            Percentage: 86.5
          </Text3D>
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
    </>
  );
};

export default Education;
