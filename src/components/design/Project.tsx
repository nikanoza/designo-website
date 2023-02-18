import styled from "styled-components";
import { ProjectType } from "../../types";

const Project: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <li>
      <Poster
        src={"https://designo-api-production.up.railway.app" + project.image}
      />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </li>
  );
};

export default Project;

const Poster = styled.img`
  width: 100%;
`;
