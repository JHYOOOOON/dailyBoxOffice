import React, { Component } from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import HeaderContainer from "./HeaderContainer";
import FooterContainer from "./FooterContainer";
import Loading from "../component/Loading";
import ContentContainer from "./ContentContainer";

const Section = styled.section`
  background-color: #40407a;
  color: white;
`;

@inject("dataStore")
@observer
class MainContainer extends Component {
  componentDidMount() {
    this.props.dataStore.getMovieData();
  }
  render() {
    const { dataStore } = this.props,
      { data } = dataStore;
    console.log(!data[0]);
    return (
      <>
        <HeaderContainer />
        <Section>{data[0] ? <ContentContainer /> : <Loading />}</Section>
        <FooterContainer />
      </>
    );
  }
}

export default MainContainer;
