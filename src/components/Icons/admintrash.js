import React from "react";
import "./styles.css";

function admintrash(props) {
  const { iconName, isActive, iconHeight, iconWidth } = props;
  return (
    <span
      className={`icon ${iconName} ${isActive ? "active" : ""}`}
      style={{ width: iconWidth, height: iconHeight }}
    />
  );
}

export default admintrash;
