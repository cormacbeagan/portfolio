import { createGlobalStyle } from 'styled-components';
import { device } from './styles/sizes';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Oleo Script';
    src: url('static/OleoScript-Regular.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: Kanit;
    src: url('static/Kanit-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Abril Fatface';
    src: url('static/AbrilFatface-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }

  html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    --dark: #333333;
    --brown: #757474;
    --offWhite: rgb(246, 246, 246);
    --sgBlue: rgb(64, 106, 141);
    --black: rgb(13, 15, 49);
    --lineGradDark: linear-gradient(rgb(21, 16, 16
    ), rgb(246, 246, 246), rgb(21, 16, 16));
    --lineGradLight: linear-gradient(rgb(246, 246, 246), rgb(51, 51, 51), rgb(246, 246, 246));
    --lineGradBlue: linear-gradient(rgb(106, 144, 180), rgb(246, 246, 246), rgb(106, 144, 180));
    --lineGradRainbow: linear-gradient(45deg, rgb(125, 16, 16), orange, yellow,  rgb(126, 255, 8), rgb(78, 199, 188), rgb(0,149,255), rgb(172, 22, 172));
    --lineGradRain: linear-gradient(rgb(59, 202, 180), rgb(0, 0, 0), rgb(196, 134, 20));
    --lineGradWild:  radial-gradient(ellipse at bottom, rgb(32, 53, 69), 100px, rgb(4, 4, 14));
    --lineGradGo: linear-gradient(rgb(18, 48, 69), rgb(246, 246, 246), rgb(18, 48, 69));
    --bsLight: 0 5px 10px rgba(0,0,0, 0.2);
    --bsDark: 0 10px 20px rgba(0,0,0, 0.5);
    font-size: 62.5%;
    --maxWidth: 1000px;
    --kanit: Kanit;
    --oleo: 'Oleo Script';
    --abril: 'Abril Fatface';
  }
 
  body {
    font-family: 'Kanit', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 2rem;
    line-height: 1.5;
    overflow: hidden;
  }

  *:focus {
    outline: none;
  }

  a:focus,
  button:focus {
    text-decoration: underline; 
    outline: none;
    }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  ul, ol{
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'Kanit', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 0;
    background: inherit;
    font-family: var(--abril);
    font-size: 24px;
    color: var(--dark);
    text-align: right;
    margin: 0;
    padding: 0;
  }

  .accessibly-hidden {
    color: inherit;
    border: 0;
    clip: rect(0000);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
  p {
    @media ${device.mobileL} {
      font-size: 1.8rem;
      line-height: 1.3;
    }
    @media ${device.mobileS} {
      font-size: 1.6rem;
      line-height: 1.2;
    }
  }

`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
