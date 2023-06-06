import axios from "axios";

export const apiUrl = process.env.REACT_APP_API_URL;

const userUrl = `${apiUrl}/user`

export async function registerUser(data) {
    return axios.post(`${userUrl}/signup`, { ...data });
}