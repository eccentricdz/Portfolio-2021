import React from "react";

export default function ({ shouldClose }) {
  return (
    <div className={`${shouldClose === true ? "close" : "open"} curtain`}></div>
  );
}
