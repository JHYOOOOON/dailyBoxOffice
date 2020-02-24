import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import MainContainer from "./container/MainContainer";

const GlobalStyle = createGlobalStyle`
  body{
    display:flex;
    justify-content: center;
    align-items: center;
    padding:0;
    margin:0;
    color: white;
  }
  `;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <MainContainer />
      </>
    );
  }
}

export default App;
