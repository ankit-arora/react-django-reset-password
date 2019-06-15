import axios from 'axios';

const getAxiosInstance = () => {
    axios.defaults.baseURL = 'http://localhost:8000/api';
    return axios;
};

export default getAxiosInstance;
