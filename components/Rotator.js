import React from "react";

export default function ({ id, elements }) {
  return (
    <div className="my-rotator" id={id}>
      {elements.map((element) => (
        <p className="rotating-element" key={element}>
          {element}
        </p>
      ))}
    </div>
  );
}
