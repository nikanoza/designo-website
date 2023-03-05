import styled from "styled-components";
import { AboutHeroMobile, WorldTalentMobile } from "../../assets";

const About = () => {
  return (
    <Page>
      <AboutBanner>
        <PosterImg src={AboutHeroMobile} alt="" />
        <AboutTitle>about as</AboutTitle>
        <AboutDescription>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </AboutDescription>
      </AboutBanner>
      <TalentContainer>
        <PosterImg src={WorldTalentMobile} alt="" />
        <TalentTitle>World-class talent</TalentTitle>
        <TalentDescription>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms. <br />
          <br />
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </TalentDescription>
      </TalentContainer>
    </Page>
  );
};

export default About;

const Page = styled.main`
  width: 100%;
`;

const AboutBanner = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--tColor);
  padding-bottom: 80px;
`;

const PosterImg = styled.img`
  width: 100%;
`;

const AboutTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: var(--light);
  text-align: center;
  text-transform: capitalize;
  margin-top: 80px;
`;

const AboutDescription = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: var(--light);
  text-align: center;
  margin-top: 24px;
  padding: 0 24px;
`;

const TalentContainer = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--cream);
  padding-bottom: 80px;
`;

const TalentTitle = styled(AboutTitle)`
  color: var(--tColor);
`;

const TalentDescription = styled(AboutDescription)`
  color: var(--darkText);
`;
