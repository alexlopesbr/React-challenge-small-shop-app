import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Style ====================

const Nav = styled.nav`
  display: flex;
  grid-gap: 20px;
`;

const Button = styled(NavLink)`
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  background: #777;
  color: #fff;
  transition: 0.2s;

  &.active {
    background: #555;
  }
`;

//  Structure ====================

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
