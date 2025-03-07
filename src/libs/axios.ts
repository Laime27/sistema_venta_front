import axios from "axios";

function getCookieValue(name: string) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [cookieName, cookieValue] = cookies[i].split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

const authApi = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    withCredentials: true
});

authApi.interceptors.request.use((config) => {

    const token = getCookieValue("token"); 

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default authApi;
