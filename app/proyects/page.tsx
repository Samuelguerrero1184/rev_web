"use client";

import { useState, useEffect } from "react";
import { NextPage } from "next";
import styles from "./proyects.module.css";
import ProjectCard from "@/components/projectCard";
import { Breadcrumbs, Link, Typography } from "@mui/material";

interface Project {
  id: number;
  image: string;
  title: string;
  location: string;
}

const ProjectsPage: NextPage = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    // Fetch project data from the API
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.bread}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography sx={{ color: "text.primary" }}>Projects</Typography>
          </Breadcrumbs>
        </div>
        <div className={styles.cards}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              location={project.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
