import "./App.css";
import React, { useState } from "react";

export function removeCamelCaseWithSpaces(color) {
  if (color.length > 0) {
	let ans="";
    for (let i = 0; i < color.length; i++) {
      ans += color[i];
      if (
        color[i + 1] >= "A" &&
        color[i + 1] <= "Z" &&
        i + 1 <= color.length - 1
      ) {
        ans += " ";
      }
    }

    return ans;
  }
}

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
          backgroundColor: (!checked && color) || (checked && "gray"),
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
        <input
          id="disable-button-checkbox"
          type="checkbox"
          checked={checked}
          aria-checked={checked}
          onChange={handleCheckChange}
        />
        <label htmlFor="disable-button-checkbox">Disable Button </label>
      </div>
    </>
  );
}

export default App;
