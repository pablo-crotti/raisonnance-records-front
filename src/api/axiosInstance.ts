import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { getAccessToken } from "../services/authService";

type FailedRequest = {
    resolve: (value: unknown) => void;
    reject: (reason?: unknown) => void;
};

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

const instance = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
        config.headers = config.headers || {};
        if (typeof config.headers.set === "function") {
            config.headers.set("Authorization", `Bearer ${token}`);
        } else {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
    }

    return config;
});


instance.interceptors.response.use(
    (res) => res,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
            _retry?: boolean;
        };

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url?.includes("/login")
        ) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers["Authorization"] = `Bearer ${token}`;
                        return instance(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const res = await axios.post(
                    "http://localhost:8000/api/refresh",
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${getAccessToken()}`
                        },
                        withCredentials: true
                    }
                );

                const newToken = res.data.access_token;
                localStorage.setItem("access_token", newToken);

                instance.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${newToken}`;
                processQueue(null, newToken);

                return instance(originalRequest);
            } catch (err) {
                processQueue(err, null);
                localStorage.removeItem("access_token");
                window.location.href = "/login";
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default instance;
