import { observable, action, configure } from "mobx";
import axios from "axios";

configure({ enforceActions: "observed" });
export default class DataStore {
  constructor(root) {
    this.root = root;
  }

  @observable data = {};

  @action
  setMovieData = data => {
    this.data = data;
  };

  @action getMovieData() {
    axios
      .get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_KEY}&targetDt=20200223`
      )
      .then(res => {
        this.setMovieData(res.data.boxOfficeResult.dailyBoxOfficeList);
      })
      .catch(e => console.log(e));
  }
}
