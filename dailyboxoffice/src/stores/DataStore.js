import { observable, action, configure } from "mobx";
import axios from "axios";

configure({ enforceActions: "observed" });
export default class DataStore {
  @observable data = {};

  @action setData = data => {
    this.data = data;
  };

  @action getData() {
    axios
      .get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_KEY}&targetDt=20200229`
      )
      .then(res => this.setData(res.data.boxOfficeResult.dailyBoxOfficeList))
      .catch(error => console.log("axios_error: " + error));
  }
}
