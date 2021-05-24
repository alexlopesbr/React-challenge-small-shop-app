import React from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import Produto from '../pages/Produto';

// Style ====================

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px 20px;
`;

const P = styled.p`
  font-weight: bold;
`;

// Structure ====================

const Home = () => {
  const [datas, setDatas] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setDatas(json));
  }, []);

  if (datas === null) return null;
  return (
    <>
      <Head title="Home" description="description Home" />

      <Main>
        {datas.map((data) => (
          <Link to={`produto/${data.id}`} key={data.id}>
            <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
            <P>{data.nome}</P>
          </Link>
        ))}

        <Routes>
          <Route path="produto/:id/*" element={<Produto />} />
        </Routes>
      </Main>
    </>
  );
};

export default Home;
