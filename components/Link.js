import React from "react";
import { logReactEvent } from "../pages";

export default function Link({ href, id, children }) {
  return (
    <p>
      <a
        className="my-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        id={id}
        onClick={() =>
          logReactEvent({
            category: "User Action",
            action: "Link Click",
            label: id,
          })
        }
      >
        {children}
      </a>
    </p>
  );
}
