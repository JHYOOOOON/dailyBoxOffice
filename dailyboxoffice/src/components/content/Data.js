import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("dataStore")
@observer
class Data extends Component {
  printData = item => {
    return (
      <li key={item.rnum} className={item.rnum}>
        <span>{item.rank}</span>
        {item.movieNm}
      </li>
    );
  };

  render() {
    const { dailyBoxOfficeList: data } = this.props.dataStore.data;
    return <ol>{data.map(item => this.printData(item))}</ol>;
  }
}

export default Data;
