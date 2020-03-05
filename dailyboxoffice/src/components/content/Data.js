import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("dataStore")
@observer
class Data extends Component {
  printData = item => {
    return (
      <li key={item.rnum} className={item.rnum}>
        <div>
          <span className="rank">{item.rank}</span>
        </div>
        <span className="movieName">{item.movieNm}</span>
      </li>
    );
  };

  render() {
    const { dailyBoxOfficeList: data } = this.props.dataStore.data;
    console.log(this.props.dataStore);
    return <ol>{data.map(item => this.printData(item))}</ol>;
  }
}

export default Data;
