import {
  take, select, put, all,
} from 'redux-saga/effects';
import {
  FORWARD, BACKWARD, SHUFFLE,
  RECEIVE_FORWARD, RECEIVE_BACKWARD, RECEIVE_SHUFFLE,
} from '../actions/audio_player_actions';
import { forwardLogic, backwardLogic, shuffleLogic } from '../utils/audio_player_logic';


function* fowardSaga() {
  yield take(RECEIVE_FORWARD);

  const newState = yield select(forwardLogic);
  yield put({ type: FORWARD, newState });
}

function* backwardSaga() {
  yield take(RECEIVE_BACKWARD);

  const newState = yield select(backwardLogic);
  yield put({ type: BACKWARD, newState });
}

function* shuffleSaga() {
  yield take(RECEIVE_SHUFFLE);

  const newState = yield select(shuffleLogic);
  yield put({ type: SHUFFLE, newState });
}

export default function* rootSaga() {
  yield all([
    fowardSaga(),
    backwardSaga(),
    shuffleSaga(),
  ]);
}
