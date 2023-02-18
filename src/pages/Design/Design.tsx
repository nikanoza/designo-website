import { useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCategoryProjects } from "../../axios";
import { DesignProjects } from "../../components/design";
import { ProjectType } from "../../types";

const Design = () => {
  const [data, setData] = useState<ProjectType[]>([]);
  const { category } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(category);
        const response = await getCategoryProjects(category || "");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <Page>
      <Banner>
        <BannerTitle>Web Design</BannerTitle>
        <BannerDescription>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </BannerDescription>
      </Banner>
      <Wrapper>
        {data.length > 0 ? <DesignProjects projects={data} /> : null}
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
