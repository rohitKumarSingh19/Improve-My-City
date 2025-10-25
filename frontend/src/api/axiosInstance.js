import axios from 'axios';
const axiosInstance=axios.create({
    baseURL:"http://localhost:5000/api",//base userl
})
export default axiosInstance;