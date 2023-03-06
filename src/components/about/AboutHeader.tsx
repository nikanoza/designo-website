import styled from "styled-components";
import { AboutHeroMobile } from "../../assets";
import Info from "../shared/Info";

const AboutHeader = () => {
  return (
    <AboutBanner>
      <PosterImg src={AboutHeroMobile} alt="" />
      <Info
        title="about as"
        description="Founded in 2010, we are a creative agency that produces lasting results
        for our clients. We’ve partnered with many startups, corporations, and
        nonprofits alike to craft designs that make real impact. We’re always
        looking forward to creating brands, products, and digital experiences
        that connect with our clients’ audiences."
      />
    </AboutBanner>
  );
};

export default AboutHeader;

const AboutBanner = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--tColor);
  padding-bottom: 80px;
`;

const PosterImg = styled.img`
  width: 100%;
`;
