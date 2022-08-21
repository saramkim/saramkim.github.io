import { FunctionComponent } from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  body {
    background: #286289;
    background: -moz-linear-gradient(left, #1c4470 0%, #42a2bf 100%);
    background: -webkit-linear-gradient(left, #1c4470 0%, #42a2bf 100%);
    background: linear-gradient(to right, #1c4470 0%, #42a2bf 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c4470', endColorstr='#42a2bf',GradientType=1 );
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
