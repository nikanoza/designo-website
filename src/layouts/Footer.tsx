import { Link } from "@tanstack/react-router";
import styled from "styled-components";
import { LogoLight } from "../assets";
import { Facebook, Instagram, Pinterest, Youtube } from "../svg";
import Twitter from "../svg/Twitter";

const Footer = () => {
  return (
    <Main>
      <FooterCard>
        <FooterCardTitle>Let’s talk about your project</FooterCardTitle>
        <FooterCardDescription>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </FooterCardDescription>
        <Button>Get in touch</Button>
      </FooterCard>
      <Logo src={LogoLight} alt="logo" />
      <Line />
      <MenuList>
        <Link
          to="/about"
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <ListItem>OUR COMPANY</ListItem>
        </Link>
        <Link
          to="/location"
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <ListItem>LOCATIONS</ListItem>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <ListItem>contact</ListItem>
        </Link>
      </MenuList>
      <Address>
        <span style={{ fontWeight: 700 }}>Designo Central Office</span> 3886
        Wellington Street Toronto, Ontario M9C 3J5
      </Address>
      <Address>
        <span style={{ fontWeight: 700 }}>Contact Us (Central Office)</span> P :
        +1 253-863-8967
        <br />M : contact@designo.co
      </Address>
      <SocialIcons>
        <Facebook />
        <Youtube />
        <Pinterest />
        <Twitter />
        <Instagram />
      </SocialIcons>
    </Main>
  );
};

export default Footer;

const Main = styled.footer`
  margin-top: 311px;
  width: 100%;
  background-color: var(--dark);
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
`;

const FooterCard = styled.div`
  width: 100%;
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tColor);
  border-radius: 15px;
  margin-top: -190px;
`;

const FooterCardTitle = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: var(--light);
  text-align: center;
`;

const FooterCardDescription = styled.h3`
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

const Logo = styled.img`
  width: 202px;
  margin-top: 64px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--light);
  opacity: 0.1;
  margin-top: 32px;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
  margin-top: 32px;
`;

const ListItem = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  color: var(--light);
  text-transform: uppercase;
  width: fit-content;
`;

const Address = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: var(--light);
  opacity: 0.5;
  width: 200px;
  margin-top: 40px;
`;

const SocialIcons = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-top: 40px;
`;
