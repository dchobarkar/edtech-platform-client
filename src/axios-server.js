import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ganety-01.firebaseio.com/'
});

export default instance; 