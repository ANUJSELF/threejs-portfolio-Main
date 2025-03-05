import React from "react";

export const anprSprite = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h2>Automatic Vehicle Number Plate Detection</h2>
    <p>
      A computer vision project that detects vehicle number plates using a custom-trained
      YOLO model and extracts text using Tesseract OCR. The system captures images,
      processes them in real-time, and provides extracted data for further use.
    </p>
    <p>
      Technologies Used: Python, OpenCV, Tesseract OCR, YOLO, Flask, React.js
    </p>
    <p
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <span>Visit (Press V)</span>
      <span>Github (Press G)</span>
    </p>
    <span>Move out of Plate to Exit</span>
  </div>
);

export const sfSprite = <div>Space Flight Project Under Development</div>;
export const iicSprite = <div>IIC Project Under Development</div>;
export const chatSprite = <div>Chat Project Under Development</div>;
export const museumSprite = <div>Museum Project Under Development</div>;
export const tttSprite = <div>Tic-Tac-Toe Project Under Development</div>;
