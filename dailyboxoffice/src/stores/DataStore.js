import { observable, action, configure } from "mobx";
import axios from "axios";

configure({ enforceActions: "observed" });
class DataStore {
  @observable data = {};

  @action setData = data => {
    this.data = data;
  };

  // @action today = () => {
  //   const date = new Date();
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth());
  //   const day = String(date.getDate());

  //   return year + month.length === 1
  //     ? "0" + month
  //     : month + day.length === 1
  //     ? "0" + day
  //     : day;
  // };

  @action getData = async () => {
    try {
      await axios
        .get(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_KEY}&targetDt=20200229`
        )
        .then(res => this.setData(res.data.boxOfficeResult.dailyBoxOfficeList));
    } catch (error) {
      console.log("axios_error: " + error);
    }
  };
}

export default DataStore;
