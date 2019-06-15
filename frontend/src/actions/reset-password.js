export const Types = {
    RESET_PASSWORD_REQUEST: 'reset_password_request',
    RESET_PASSWORD_SUCCESS: 'reset_password_success',
    RESET_PASSWORD_FAILURE: 'reset_password_failure',
    RESET_PASSWORD_LOADING: 'reset_password_loading'
};

export const resetPasswordRequest = ({ username, password }) => ({
    type: Types.RESET_PASSWORD_REQUEST,
    payload: {
        username,
        password
    }
});

export const resetPasswordSuccess = (data) => ({
    type: Types.RESET_PASSWORD_SUCCESS,
    payload: {
        data
    }
});

export const resetPasswordFailure = (data) => ({
    type: Types.RESET_PASSWORD_FAILURE,
    payload: {
        data
    }
});

export const resetPasswordLoading = () => ({
    type: Types.RESET_PASSWORD_LOADING,
    payload: {}
});
