import React, { useState } from "react";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";
import Card from "./components/Card"; // optional

const colors = ["red", "blue", "green"];

export default function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => setSelectedColor(color);
  const resetColor = () => setSelectedColor("");
  const [currentHex, setCurrentHex] = useState("");

  const hexChanger = (e) => {
    const value = e.target.value;
    setSelectedColor(value);
    setCurrentHex(value);
  };
  return (
    <Card>
      <h1>🎨 Color Palette Picker</h1>

      <ColorPreview color={selectedColor} />

      <div className="button-group">
        {colors.map((color) => (
          <ColorButton
            key={color}
            color={color}
            onClick={() => handleColorClick(color)}
          />
        ))}
        <button className="gray" onClick={resetColor}>
          Reset
        </button>
        <input
          className="hexbtn"
          type="text"
          value={currentHex}
          onChange={hexChanger}
          placeholder="#fff"
        />
      </div>
    </Card>
  );
}
