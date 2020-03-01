import React, { Component } from "react";
import Form from "../components/content/Form";
import Loading from "../components/content/Loading";
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
    return <div>{!data[0] ? <Loading /> : <Form />}</div>;
  }
}

export default ContentContainer;
