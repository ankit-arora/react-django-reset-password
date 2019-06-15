import getAxiosInstance from '../utils/get-axios-instance';

const axiosInstance = getAxiosInstance();

export const resetPassword = ({ username, password }) => axiosInstance.put('/passwords/', {
    username,
    password
});
