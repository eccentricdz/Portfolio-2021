import React from "react";
import { ProjectSkeleton } from "./Project";

const SkeletonLoaders = ({ count }) => {
    const loaders = [];
    for (let i = 0; i < count; i++){
        loaders.push(<ProjectSkeleton key={i}></ProjectSkeleton>)
    }

    return (
        <div className="skeleton-container">
            {loaders}
        </div>
    )
}

export default SkeletonLoaders;