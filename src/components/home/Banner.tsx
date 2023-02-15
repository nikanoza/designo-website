import styled from "styled-components";
import { Phone } from "../../assets";

const Banner = () => {
  return (
    <Main>
      <BannerTitle>
        Award-winning custom designs and digital branding solutions
      </BannerTitle>
      <BannerDescription>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </BannerDescription>
      <Button>Learn More</Button>
      <Circle />
      <Mobile src={Phone} />
    </Main>
  );
};

export default Banner;

const Main = styled.div`
  width: 100%;
  padding: 80px 24px 450px 24px;
  background-color: var(--tColor);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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
`;

const Button = styled.button`
  padding: 18px 24px;
  border-radius: 8px;
  background-color: var(--light);
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 21.68px;
  letter-spacing: 1px;
  color: var(--darkText);
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 24px;
`;

const Circle = styled.div`
  position: absolute;
  width: 640px;
  height: 640px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  left: 0;
  top: 102px;
`;

const Mobile = styled.img`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: -400px;
`;
