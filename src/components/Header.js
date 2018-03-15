import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #e74c3c;
`;

const NavItem = styled(Link)`
  display: inline-block;
  margin-right: 1rem;
  color: #e74c3c;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = ({ title }) => (
  <Container>
    <Logo to="/">{title}</Logo>

    <nav>
      <NavItem to="/about">About me</NavItem>
      <NavItem to="/projects">My projects</NavItem>
    </nav>
  </Container>
);

export default Header;
