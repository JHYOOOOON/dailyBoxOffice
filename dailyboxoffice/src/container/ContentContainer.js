import React, { Component } from "react";
import Form from "../components/content/Form";
import Loading from "../components/content/Loading";
import { inject } from "mobx-react";

@inject("dataStore")
class ContentContainer extends Component {
  componentDidMount() {
    this.props.dataStore.getData();
  }
  render() {
    const { dataStore } = this.props,
      { data } = dataStore;
    console.log(dataStore);
    return <div>{!data[0] ? <Loading /> : <Form />}</div>;
  }
}

export default ContentContainer;
