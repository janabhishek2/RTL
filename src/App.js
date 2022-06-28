import "./App.css";
import React, { useState } from "react";
function App() {
  const [color, setColor] = useState("red");
  const [checked, setChecked] = useState(false);

  const handleCheckChange = () => {
    setChecked((prev) => {
      return !prev;
    });
  };

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
          margin: "20px",
        }}
        disabled={checked}
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
      <br />
      <div style={{ margin: "20px" }}>
        <label htmlFor="check">Display : </label>
        <input
          name="check"
          type="checkbox"
          checked={checked}
		  aria-checked={checked}
          onChange={handleCheckChange}
        />
      </div>
    </>
  );
}

export default App;
