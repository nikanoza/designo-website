import styled from "styled-components";
import { ProjectType } from "../../types";
import ProjectItem from "./ProjectItem";

const DesignProjects: React.FC<{ projects: ProjectType[] }> = ({
  projects,
}) => {
  return (
    <ProjectList>
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </ProjectList>
  );
};

export default DesignProjects;

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 40px;
  margin-top: 96px;
`;
