import React, { Component } from "react";
import Error from "./Error";
import Data from "./Data";
import { inject, observer } from "mobx-react";

@inject("dataStore")
@observer
class Section extends Component {
  state = {
    flag: true
  };

  printDate(date) {
    let formattedDate = "";
    let year = date.slice(0, 4);
    let month = date.slice(4, 6);
    let day = date.slice(6, 8);
    formattedDate = year + "." + month + "." + day;
    return formattedDate;
  }
  render() {
    const { dailyBoxOfficeList: data } = this.props.dataStore.data,
      { date } = this.props;

    return (
      <section>
        <span className="targetDate">
          Date: <span>{this.printDate(date)}</span>
        </span>
        {!data[0] ? (
          <div className="error_wrapper">
            <Error />
          </div>
        ) : (
          <Data />
        )}
      </section>
    );
  }
}

export default Section;
