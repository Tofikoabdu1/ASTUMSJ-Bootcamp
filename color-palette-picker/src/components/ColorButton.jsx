import React from "react";

export default function ColorButton({ color, onClick }) {
  return (
    <button className={color} onClick={onClick}>
      {color}
    </button>
  );
}
