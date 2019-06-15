import { Types } from '../actions/reset-password';

const INITIAL_STATE = {
    data: {
        errorMessages: []
    },
    success: false,
    loading: false
};

const resetPassword = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                success: true,
                loading: false
            };
        case Types.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                data: action.payload.data,
                success: false,
                loading: false
            };
        case Types.RESET_PASSWORD_LOADING:
            console.log('test');
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default resetPassword;
