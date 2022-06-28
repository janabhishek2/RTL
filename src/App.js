import "./App.css";
import React, { useState } from "react";
function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <button
        style={{
          backgroundColor: color,
          padding: "20px",
          fontSize: "20px",
          color: "white",
          borderRadius: "15px",
          width: "50%",
          margin: "auto",
        }}
        onClick={() => {
          setColor((prev) => {
            if (prev == "red") {
              return "blue";
            } else return "red";
          });
        }}
      >
        Change color to {color === "red" ? "blue" : "red"}
      </button>
    </>
  );
}

export default App;
