import { useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AppDesignMobile,
  GraphicDesignMobile,
  WebDesignMobile,
} from "../../assets";
import { getCategoryProjects } from "../../axios";
import { DesignProjects, Project } from "../../components";
import { ProjectType } from "../../types";

const Design = () => {
  const [data, setData] = useState<ProjectType[]>([]);
  const { category } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCategoryProjects(category || "");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category]);

  const bannerDescription =
    category === "web"
      ? "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      : category === "app"
      ? "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      : "We deliver eye-catching branding materials that are tailored to meet your business objectives.";

  return (
    <Page>
      <Banner>
        <BannerTitle>{category} Design</BannerTitle>
        <BannerDescription>{bannerDescription}</BannerDescription>
      </Banner>
      <Wrapper>
        {data.length > 0 ? <DesignProjects projects={data} /> : null}
        <ProjectsLinks>
          {category !== "web" ? (
            <Project title="WEB DESIGN" image={WebDesignMobile} to="web" />
          ) : null}
          {category !== "app" ? (
            <Project title="APP DESIGN" image={AppDesignMobile} to="app" />
          ) : null}
          {category !== "graphic" ? (
            <Project
              title="GRAPHIC DESIGN"
              image={GraphicDesignMobile}
              to="graphic"
            />
          ) : null}
        </ProjectsLinks>
      </Wrapper>
    </Page>
  );
};

export default Design;

const Page = styled.main`
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  height: 320px;
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--tColor);
`;

const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: var(--light);
  text-align: center;
  text-transform: capitalize;
`;

const BannerDescription = styled.h2`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: var(--light);
  text-align: center;
  margin-top: 24px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
`;

const ProjectsLinks = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 96px;
`;
