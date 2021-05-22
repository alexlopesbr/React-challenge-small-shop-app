import React from 'react';
import Head from '../components/Head';

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
      <h1>Home</h1>
      {datas.map((data) => (
        <div key={data.id}>
          <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
          <p>{data.nome}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
