import React from 'react';
import Head from '../components/Head';
import styled from 'styled-components';

import picture from '../img/contato.jpg';

// Style ====================

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Div = styled.div``;

const P = styled.p`
  &::before {
    content: '';
    height: 2px;
    width: 15px;
    margin-right: 10px;
    display: inline-block;
    background: var(--medium);
  }
`;

// Structure ====================

const Contato = () => {
  return (
    <Section>
      <Head title="Sobre" description="Sobre description" />
      <img src={picture} alt="typewriter" />
      <Div>
        <h2>Entre em contato.</h2>
        <P>email@gmail.com</P>
        <P>99999-9999</P>
        <P>Rua dos bobos, 0</P>
      </Div>
    </Section>
  );
};

export default Contato;
