import { useState } from "react";
import styled from "styled-components";
import { LogoDark } from "../assets";
import { Hamburger, Close } from "../svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <HeaderComponent>
      <Logo src={LogoDark} alt="logo" />
      {showMenu ? (
        <Close onClick={() => setShowMenu(false)} />
      ) : (
        <Hamburger onClick={() => setShowMenu(true)} />
      )}
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.header`
  width: 100%;
  height: 96px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 202px;
`;
