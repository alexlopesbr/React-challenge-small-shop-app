import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
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
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 10rem);
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .App {
  }

  h1{
    margin: 10px 0;
    font-family: serif;
  }

  p{
    color: var(--dark);
  }

  .anime-left{
    opacity: 0;
    transform: translateX(-20px);
    animation: anime-left 0.3s forwards;
  }

  @keyframes anime-left{
    to {
      opacity: initial;
      transform: initial;
    }
  }

  .loading{
    width: 20px;
    height: 20px;
    border-radius:50%;
    border: 5px solid #ccc;
    border-right-color: transparent;    
    animation: loading 1s infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
