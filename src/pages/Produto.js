import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Title from '../components/Title';

// Style ====================
const Section = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Span = styled.span`
  display: inline-block;
  background: orange;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// Structure ====================

const Produto = () => {
  const { id } = useParams();
  const [datas, setDatas] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    async function dataFetch(url) {
      try {
        setLoading(true);
        const dataRes = await fetch(url);
        const dataJSON = await dataRes.json();
        setDatas(dataJSON);
      } catch (erro) {
        setError('Ocorreu um erro');
      } finally {
        setLoading(false);
      }
    }
    dataFetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (datas === null) return null;

  return (
    <Section>
      <img src={datas.fotos[0].src} alt={datas.fotos[0].titulo} />

      <div>
        <Title title={datas.nome} />
        <Span>R$ {datas.preco}</Span>
        <p>{datas.descricao}</p>
      </div>
    </Section>
  );
};

export default Produto;
