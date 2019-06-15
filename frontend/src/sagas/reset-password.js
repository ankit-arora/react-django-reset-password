import { takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/reset-password';
import * as api from '../api/reset-password';

function* resetPassword(action) {
    try {
        yield put(actions.resetPasswordLoading());
        const { username, password } = action.payload;
        const result = yield call(api.resetPassword, {
            username,
            password
        });
        console.log(result);
        yield put(actions.resetPasswordSuccess(result));
    } catch (error) {
        const { status, data } = error.response;
        let errorMessages = [];
        if (status === 400) {
            //bad request
            errorMessages = Object.keys(data).map(fieldName => (
                `${fieldName} : ${data[fieldName][0]}`
            ));
        }
        if (status === 404) {
            //user not found
            errorMessages = ['username: doesn\'t exist.'];
        }
        yield put(actions.resetPasswordFailure({
            errorMessages
        }));
    }
}

function* watchResetPasswordRequest() {
    yield takeLatest(actions.Types.RESET_PASSWORD_REQUEST, resetPassword);
}

const resetPasswordSagas = [
    fork(watchResetPasswordRequest)
];

export default resetPasswordSagas;
