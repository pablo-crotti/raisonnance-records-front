import instance from "./axiosInstance";

const API_URL = "http://localhost:8000/api";



export const getUser = async () => {
    const res = await instance.get(`${API_URL}/user`);

    return res;
}


