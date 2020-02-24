import React, { Component } from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import HeaderContainer from "./HeaderContainer";
import FooterContainer from "./FooterContainer";

const Section = styled.section`
  background-color: #40407a;
  color: white;
`;

@inject("dataStore")
@observer
class MainContainer extends Component {
  componentWillMount() {
    this.props.dataStore.getMovieData();
  }
  render() {
    console.log(this.props.dataStore.data);
    return (
      <>
        <HeaderContainer />
        <Section>Data</Section>
        <FooterContainer />
      </>
    );
  }
}

export default MainContainer;
