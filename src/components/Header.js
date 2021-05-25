import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Style ====================

const Nav = styled.nav`
  display: flex;
  grid-gap: 20px;
  margin: 20px 0;
`;

const Button = styled(NavLink)`
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  background: var(--medium);
  color: var(--ligth);
  transition: 0.2s;

  &.active,
  &:hover {
    background: var(--dark);
  }
`;

// Structure ====================

const Header = () => {
  return (
    <>
      <Nav>
        <Button to="/" end>
          Produtos
        </Button>
        <Button to="/contato">Contato</Button>
      </Nav>
    </>
  );
};

export default Header;
