import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/sky-logo.png";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: navy;
  color: white;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} alt="Sky Logo" />
      </Link>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        <StyledLink to="/timeseries">Timeseries</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;