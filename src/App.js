import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/Global';

import Header from './components/Header';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Produto from './pages/Produto';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="//*" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="produto/:id/*" element={<Produto />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

export default App;
