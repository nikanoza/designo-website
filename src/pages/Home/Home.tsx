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

const InfoCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoCardPoster = styled.img`
  width: 202px;
  height: 202px;
`;

const InfoCardTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--darkText);
  margin-top: 48px;
`;

const InfoCardDescription = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--darkText);
  text-align: center;
  margin-top: 32px;
`;
