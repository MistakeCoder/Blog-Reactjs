import axios from "axios";

// Tạo instance của axios với baseURL
const axiosInstance = axios.create({
    baseURL: 'https://blogs-anythings.fly.dev/api/v1',
});

// Tự động thêm access token vào request nếu tồn tại
axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('access_token');
    if (token) {
        // Gán trực tiếp token vào headers cho request hiện tại
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
