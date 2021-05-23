import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  img{
    width: 100%;
  }

  :root{
    --ligth: #fff;
    --medium: #777;
    --dark: #555
  }

  #root{
    max-width: 500px;
    margin: 0 auto;
  }

  h2{
    margin: 10px 0;
  }
`;
