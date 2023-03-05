import styled from "styled-components";
import { Banner, Projects } from "../../components";

const Home = () => {
  return (
    <Page>
      <Banner />
      <Wrapper>
        <Projects />
        <Infos></Infos>
      </Wrapper>
    </Page>
  );
};

export default Home;

const Page = styled.main`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
`;

const Infos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  margin-top: 120px;
`;
