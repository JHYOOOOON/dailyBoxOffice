import React, { Component, Fragment } from "react";
import Loading from "../components/content/Loading";
import Section from "../components/content/Section";
import { inject, observer } from "mobx-react";

@inject("dataStore")
@observer
class ContentContainer extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    this.props.dataStore.getData();
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  valueChange = e => {
    this.setState({ value: e.target.value });
  };

  isNumber(s) {
    s = s.replace(/^\s*|\s*$/g, "");
    if (s === "" || isNaN(s)) return false;
    return true;
  }
  handleClick = () => {
    const { value } = this.state;
    if (value.length !== 8 || !this.isNumber(value)) {
      alert("Please submit right form 👽");
      return;
    }
    this.props.dataStore.setDate(this.state.value);
    this.props.dataStore.getData();
    this.setState({ value: "" });
  };
  render() {
    const { dailyBoxOfficeList: data, showRange } = this.props.dataStore.data,
      { targetDt, setDate, getDate } = this.props.dataStore;
    let date = "";
    if (!targetDt) setDate(getDate());
    date = showRange === undefined ? date : showRange.substr(0, 8);

    return (
      <Fragment>
        <div className="dateInputForm">
          <input
            className="dateInput"
            type="text"
            placeholder="YYYYMMDD"
            value={this.state.value}
            onChange={this.valueChange}
            onKeyPress={this.handleKeyPress}
          />
          <button onClick={this.handleClick}>submit</button>
        </div>
        <div className="content_wrapper">
          {data === undefined || targetDt !== date ? (
            <Loading />
          ) : (
            <Section date={targetDt} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default ContentContainer;
