import { observable, action, configure } from "mobx";
import axios from "axios";
import dotenv from "dotenv";

configure({ enforceActions: "observed" });
export default class DataStore {
  constructor(root) {
    this.root = root;
  }

  @observable data = {};

  @action setMovieData = data => {
    this.data = data;
  };

  @action getMovieData() {
    axios
      .get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.KEY}&targetDt=20200223`
      )
      .then(res => this.setMovieData(res.data.boxOfficeResult))
      .catch(e => console.log(e));
  }
}
