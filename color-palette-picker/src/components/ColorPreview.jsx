import React from "react";

export default function ColorPreview({ color }) {
  const boxStyle = {
    backgroundColor: color || "#ddd",
  };

  return (
    <div className="preview-box" style={boxStyle}>
      <h2>{color ? `You picked ${color}` : "No color selected"}</h2>
    </div>
  );
}
