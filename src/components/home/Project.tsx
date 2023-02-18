import { Link } from "@tanstack/react-router";
import styled, { css } from "styled-components";
import { RightArrow } from "../../svg";

type PropsType = {
  title: string;
  image: string;
  to: string;
};

const Project: React.FC<PropsType> = ({ title, image, to }) => {
  return (
    <Main image={image}>
      <ProjectTitle>{title}</ProjectTitle>
      <Link
        to="/design/$category"
        params={{ category: to }}
        style={{ textDecoration: "none" }}
      >
        <ViewProject>
          <ViewProjectText>VIEW PROJECTS</ViewProjectText>
          <RightArrow />
        </ViewProject>
      </Link>
    </Main>
  );
};

export default Project;

const Main = styled.div(
  (props: { image: string }) => css`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${props.image});
  `
);

const ProjectTitle = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 1.4px;
  color: var(--light);
  text-transform: uppercase;
`;

const ViewProject = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const ViewProjectText = styled.h3`
  font-weight: 500;
  font-size: 15px;
  line-height: 21.68px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--light);
`;
