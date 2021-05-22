import React from 'react';
import Head from '../components/Head';
import picture from '../img/contato.jpg'

const Contato = () => {
  return (
    <>
      <Head title="Sobre" description="Sobre description" />
      <img src={picture} alt="typewriter"/>
      <h2>Entre em contato.</h2>
      <p>email@gmail.com</p>
      <p>99999-9999</p>
      <p>Rua dos bobos, 0</p>
    </>
  );
};

export default Contato;
