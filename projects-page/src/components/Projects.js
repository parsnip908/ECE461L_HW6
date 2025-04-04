import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { Container, Typography } from "@mui/material";

const projectData = [
  { id: 15, name: "AI Research" },
  { id: 22, name: "IoT Smart Home" },
  { id: 30, name: "Project 3" },
];

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [hardwareCounts, setHardwareCounts] = useState({ A: 0, B: 0 });

  const handleCheckout = (set, increment) => {
    setHardwareCounts((prev) => {
      const newCount = prev[set] + increment;
      if (newCount >= 0 && newCount <= 10) return { ...prev, [set]: newCount };
      return prev;
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Projects List
      </Typography>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          hardwareCounts={hardwareCounts}
          handleCheckout={handleCheckout}
        />
      ))}
    </Container>
  );
};

export default Projects;