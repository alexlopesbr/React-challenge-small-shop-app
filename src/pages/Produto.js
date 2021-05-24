import React from 'react';
import { useParams } from 'react-router';

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
    <div>
      <h1>{datas.nome}</h1>
      <span>R$ {datas.preco}</span>
      <p>{datas.descricao}</p>
    </div>
  );
};

export default Produto;
