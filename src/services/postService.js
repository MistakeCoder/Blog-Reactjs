import axiosInstance from "../utils/axiosConfig"

export const getPostsByFilter = async () => {
    try {
        const res = await axiosInstance.post('/posts/get-posts-by-filter', { deleted: true });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getDetailPost = async (id) => {
    try {
        const res = await axiosInstance.get(`/posts/get-detail/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}