import { all } from 'redux-saga/effects';
import resetPasswordSagas from './reset-password';

export default function* rootSaga() {
    yield all([
        ...resetPasswordSagas
    ]);
}
