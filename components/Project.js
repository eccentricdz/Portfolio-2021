import React from "react";
import Image from "next/image";

export const ProjectSkeleton = () => (
  <section className="project skeleton"></section>
);

export default function Project(props) {
  const projectTags = props.tags.split(",").map((tag, idx) => {
    return (
      <p className="project-tags" key={idx}>
        {tag}
      </p>
    );
  });

  return (
    <section
      className="project"
      id={props.id}
      onClick={() => props.clickHandler(props.id)}
    >
      <a
        className="project-link"
        href={props.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src={`/project-images/${props.id}.${props.imageExtension}`}
          alt={props.title}
          layout="fill"
        ></Image>
      </a>
      <div className="project-details">
        <div className="project-details-top">
          <p className="project-title">{props.title}</p>
          <div className="project-divider"></div>
          <p className="project-description">{props.description}</p>
        </div>
        <div className="project-details-bottom">{projectTags}</div>
      </div>
    </section>
  );
}
