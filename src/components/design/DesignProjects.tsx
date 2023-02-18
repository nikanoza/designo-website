import { ProjectType } from "../../types";
import Project from "./Project";

const DesignProjects: React.FC<{ projects: ProjectType[] }> = ({
  projects,
}) => {
  return (
    <ul>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default DesignProjects;
