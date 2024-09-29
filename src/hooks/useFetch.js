import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosConfig";

const useFetch = async (url, method = 'get', params = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res;
                if (method === 'get') {
                    res = await axiosInstance.get(url);
                } else if (method === 'post') {
                    res = await axiosInstance.post(url, params);
                }
                setData(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    });

    return { data, loading, error };
};

export default useFetch;
