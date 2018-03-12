import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled(Link)`
  display: inline-block;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = ({ title }) => (
  <Container>
    <Link to="/">{title}</Link>

    <nav>
      <NavItem to="/about">About me</NavItem>
      <NavItem to="/projects">My projects</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </nav>
  </Container>
);

export default Header;
