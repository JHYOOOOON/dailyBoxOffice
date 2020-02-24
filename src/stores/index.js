import RootStore from "./RootStore";

let rootStore = new RootStore();

let stores = {
  rootStore: rootStore,
  ...rootStore
};

export default stores;
