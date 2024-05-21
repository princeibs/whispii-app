import { ProjectInterface } from "@/app/interfaces/github";
import React from "react";

const ProjectsPage = async () => {
  const res = await fetch("http://localhost:5000/github/projects?trim=false", {
    cache: "no-store",
  });
  const data: ProjectInterface[] = await res.json();

  return (
    <>
      <div>
        <h1 className="text-5xl">Projects</h1>
        <p className="mt-4 text-xl">All projects in the database</p>
        <div className="">
          {data.map((project) => (
            <div></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
