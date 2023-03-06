import styled, { css } from "styled-components";

type PropsType = {
  title: string;
  description: string;
  titleColor?: string;
  descriptionColor?: string;
};

const Info: React.FC<PropsType> = ({
  title,
  description,
  titleColor,
  descriptionColor,
}) => {
  return (
    <>
      <AboutTitle titleColor={titleColor}>{title}</AboutTitle>
      <AboutDescription descriptionColor={descriptionColor}>
        {description}
      </AboutDescription>
    </>
  );
};

export default Info;

const AboutTitle = styled.h1(
  (props: { titleColor?: string }) => css`
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    color: ${props.titleColor ? props.titleColor : "var(--light)"};
    text-align: center;
    text-transform: capitalize;
    margin-top: 80px;
  `
);

const AboutDescription = styled.p(
  (props: { descriptionColor?: string }) => css`
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: ${props.descriptionColor ? props.descriptionColor : "var(--light)"};
    text-align: center;
    margin-top: 24px;
    padding: 0 24px;
  `
);
