import React from "react";
import "./Button.css";

export default function Button(prop) {
  return (
    <button
      className={prop.type ? "clickbutton" : "resetbutton"}
      onClick={prop.event}
    >
      {prop.text}
    </button>
  );
}
