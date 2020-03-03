import { observable, action, configure } from "mobx";
import axios from "axios";

configure({ enforceActions: "observed" });
export default class DataStore {
  @observable data = {};
  @observable targetDt = "";

  @action setData = data => {
    this.data = data;
  };

  @action setDate = date => {
    this.targetDt = date;
  };

  @action getDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = String(date.getMonth() + 1);
    let day = String(date.getDay());

    month = month.length === 1 ? "0" + month : month;
    day = day.length === 1 ? "0" + day : day;

    return year + month + day;
  }

  @action getData() {
    axios
      .get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_KEY}&targetDt=${this.targetDt}`
      )
      .then(res => {
        this.setData(res.data.boxOfficeResult);
      })
      .catch(error => console.log("axios_error: " + error));
  }
}
