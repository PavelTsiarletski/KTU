import { getData } from "./catalog";
import { all } from "redux-saga/effects";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([getData() /*, another saga here*/]);
}
