import React, { Component } from "react";
import Loading from "../components/content/Loading";
import Form from "../components/content/Form";
import { inject, observer } from "mobx-react";

@inject("dataStore")
@observer
class ContentContainer extends Component {
  componentDidMount() {
    this.props.dataStore.getData();
  }
  render() {
    const { dataStore } = this.props,
      { data } = dataStore;
    console.log(typeof data[0]);
    return <div>{data[0] === undefined ? <Loading /> : data[0].movieNm}</div>;
  }
}

export default ContentContainer;
