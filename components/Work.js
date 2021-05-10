import React, { Suspense, useEffect, useReducer } from "react";
import Project from "./Project";
import Curtain from "./Curtain";
import SkeletonLoaders from "./SkeletonLoaders";
import projectsArray from "../projects.json";

const Work = ({ clickHandler, setCurtainState }) => {
  useEffect(() => {
    setCurtainState("open");
  }, []);
  return (
    <section className="work">
      {projectsArray.map((project, index) => {
        const { id, description, title, url, tags, extension } = project;
        return (
          <Project
            key={index}
            index={index}
            id={id}
            title={title}
            description={description}
            tags={tags}
            url={url}
            imageExtension={extension === undefined ? "jpg" : extension}
            clickHandler={(id) => clickHandler(id)}
          ></Project>
        );
      })}
    </section>
  );
};

export default Work;
