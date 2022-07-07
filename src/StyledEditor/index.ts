import styled from "styled-components";

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const StyledEditContainer = styled.div`
    display: flex;
    width: 500px;
    justify-content: center;
    align-items: center;
`

export const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  

`