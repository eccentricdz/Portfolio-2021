import React, { useState } from "react";

export default function Toggle({ handleToggle }) {
  const [switchPosition, setSwitchPosition] = useState("left");

  const toggle = () => {
    const newSwitchPosition = switchPosition === "left" ? "right" : "left";
    setSwitchPosition(newSwitchPosition);

    handleToggle();
  };

  return (
    <div className={`${switchPosition} toggle-container`} onClick={toggle}>
      <div className="toggle-switch"></div>
    </div>
  );
}
