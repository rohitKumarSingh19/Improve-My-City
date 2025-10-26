import axios from 'axios';
const axiosInstance=axios.create({
    baseURL:"http://localhost:5000/api",//base userl
})

// ✅ Automatically attach token to requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // token saved during login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosInstance;