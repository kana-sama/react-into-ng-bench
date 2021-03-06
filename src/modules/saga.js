import { all, fork } from "redux-saga/effects";

import entities from "./entities/saga";
import errors from "./errors/saga";

export default function*() {
  // prettier-ignore
  yield all([
    fork(entities),
    fork(errors)
  ]);
}
