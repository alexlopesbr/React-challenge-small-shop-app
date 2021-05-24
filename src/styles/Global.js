import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 1rem sans-serif;
  }

  button {
    cursor: pointer;
  }

  img{
    width: 100%;
    border-radius: 10px;
  }

  :root{
    --ligth: #fff;
    --medium: #777;
    --dark: #555
  }

  #root{
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px
  }

  h1{
    margin: 10px 0;
    font-family: serif;
  }
`;
