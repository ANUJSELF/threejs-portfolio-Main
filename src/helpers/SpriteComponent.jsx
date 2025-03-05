import React from "react";
import { Html } from "@react-three/drei";
import { anprSprite } from "./sprites";

const spriteStyles = {
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.8)",
  fontSize: "30px",
  padding: "100px 200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const SpriteComponent = ({ controlsRef, obj, type }) => {
  return type === "links" ? (
    <Html
      sprite
      style={spriteStyles}
      position={[
        controlsRef.current.getObject().position.x,
        controlsRef.current.getObject().position.y - 2,
        controlsRef.current.getObject().position.z + 20,
      ]}
      transform
    >
      <>
        <span>Press E to visit Profile</span>
        <span>Move out of Plate to Exit</span>
      </>
    </Html>
  ) : (
    <Html
      sprite
      style={spriteStyles}
      position={[
        controlsRef.current.getObject().position.x < -100
          ? controlsRef.current.getObject().position.x - 20
          : controlsRef.current.getObject().position.x + 20,
        controlsRef.current.getObject().position.y - 2,
        controlsRef.current.getObject().position.z,
      ]}
      transform
    >
      {obj === "anpr" ? (
        anprSprite
      ) : (
        <>
          <span>Project Under Development</span>
        </>
      )}
    </Html>
  );
};

export default SpriteComponent;

