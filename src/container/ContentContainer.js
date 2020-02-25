import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;
@inject("dataStore")
@observer
class ContentContainer extends Component {
  render() {
    const { data } = this.props.dataStore;
    console.log(data[0]);
    const renderMovie = item => {
      return (
        <li key={item.rnum}>
          <span>{item.rank}</span>
          <span>{item.movieNm}</span>
        </li>
      );
    };
    return <Ul>{data.map(item => renderMovie(item))}</Ul>;
  }
}

export default ContentContainer;
