import {
  takeLatest, select, put, all,
} from 'redux-saga/effects';
import {
  FORWARD, BACKWARD, SHUFFLE,
  RECEIVE_FORWARD, RECEIVE_BACKWARD, RECEIVE_SHUFFLE,
} from '../actions/audio_player_actions';
import { forwardLogic, backwardLogic, shuffleLogic } from '../utils/audio_player_logic';


function* fowardSaga() {
  const newState = yield select(forwardLogic);
  yield put({ type: FORWARD, newState });
}
function* backwardSaga() {
  const newState = yield select(backwardLogic);
  yield put({ type: BACKWARD, newState });
}
function* shuffleSaga() {
  const newState = yield select(shuffleLogic);
  yield put({ type: SHUFFLE, newState });
}

function* watchForward() {
  yield takeLatest(RECEIVE_FORWARD, fowardSaga);
}
function* watchBackward() {
  yield takeLatest(RECEIVE_BACKWARD, backwardSaga);
}
function* watchShuffle() {
  yield takeLatest(RECEIVE_SHUFFLE, shuffleSaga);
}

export default function* rootSaga() {
  yield all([
    watchForward(),
    watchBackward(),
    watchShuffle(),
  ]);
}
