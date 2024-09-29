import axiosInstance from "../utils/axiosConfig";

export const getAuth = async () => {
    const tokenExists = sessionStorage.getItem('access_token');
    if (!tokenExists) {
        const res = await axiosInstance.post('/auth/normal-user', []);
        sessionStorage.setItem('access_token', res.data.access_token);
    }
};

export const getToken = async () => {
    return sessionStorage.getItem('access_token');
};