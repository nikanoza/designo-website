import styled from "styled-components";
import {
  AboutHeroMobile,
  AustraliaLocation,
  CanadaLocation,
  UkLocation,
  DealMobile,
  WorldTalentMobile,
} from "../../assets";
import { AboutHeader } from "../../components/about";

const About = () => {
  return (
    <Page>
      <AboutHeader />
      {/* <TalentContainer>
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
      </TalentContainer> */}
      <AboutLocations>
        <AboutLocation>
          <LocationImageBox>
            <LocationImage src={CanadaLocation} alt="" />
          </LocationImageBox>
          <LocationName>CANADA</LocationName>
          <ViewLocation>SEE LOCATION</ViewLocation>
        </AboutLocation>
        <AboutLocation>
          <LocationImageBox>
            <LocationImage src={AustraliaLocation} alt="" />
          </LocationImageBox>
          <LocationName>AUSTRALIA</LocationName>
          <ViewLocation>SEE LOCATION</ViewLocation>
        </AboutLocation>
        <AboutLocation>
          <LocationImageBox>
            <LocationImage src={UkLocation} alt="" />
          </LocationImageBox>
          <LocationName>UNITED KINGDOM</LocationName>
          <ViewLocation>SEE LOCATION</ViewLocation>
        </AboutLocation>
      </AboutLocations>
      {/* <TalentContainer style={{ marginTop: "120px" }}>
        <PosterImg src={DealMobile} alt="" />
        <TalentTitle>The real deal</TalentTitle>
        <TalentDescription>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success. <br /> <br />
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </TalentDescription>
      </TalentContainer> */}
    </Page>
  );
};

export default About;

const Page = styled.main`
  width: 100%;
`;

const TalentContainer = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--cream);
  padding-bottom: 80px;
`;

const PosterImg = styled.img`
  width: 100%;
`;

// const TalentTitle = styled(AboutTitle)`
//   color: var(--tColor);
// `;

// const TalentDescription = styled(AboutDescription)`
//   color: var(--darkText);
// `;

const AboutLocations = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 48px;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const AboutLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LocationImageBox = styled.div`
  width: 202px;
  height: 202px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.197569) 100%
  );
`;

const LocationImage = styled.img`
  width: 100%;
  height: 100%;
`;

const LocationName = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 5px;
  color: var(--darkText);
  text-transform: uppercase;
  margin-top: 48px;
  text-align: center;
`;

const ViewLocation = styled.button`
  text-decoration: none;
  padding: 18px;
  background-color: var(--tColor);
  color: var(--light);
  border-radius: 8px;
  border: none;
  margin-top: 32px;
  font-weight: 500;
  font-size: 15px;
  line-height: 21.68px;
  letter-spacing: 1px;
`;
