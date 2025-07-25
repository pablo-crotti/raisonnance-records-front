import axios, { AxiosError } from "axios";
import { type AuthUser, type LoginResponse, type USER_ROLE, type USER_STATUS } from "../models/Auth";
import type { GENERAL_API_ERROR } from "../models/Errors";
import { getUser } from "../api/routes";

const API_URL = "http://localhost:8000/api";



export const login = async (
    email: string,
    password: string
): Promise<{ token?: string; error?: GENERAL_API_ERROR }> => {
    try {
        const res = await axios.post<LoginResponse>(`${API_URL}/login`, {
            email,
            password,
        });


        const { access_token } = res.data;
        localStorage.setItem("access_token", access_token);

        try {
            const userRes = await getUser();

            const user = userRes.data.data;

            localStorage.setItem("user_id", user.id)
            localStorage.setItem("user_email", user.email)
            localStorage.setItem("user_name", user.name)
            localStorage.setItem("user_role", user.role)
            localStorage.setItem("user_status", user.status)




            return { token: access_token };

        } catch {
            throw {

                success: false,
                message: "errors.server",
                errors: {},
            };
        }

    } catch (error: unknown) {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
            const data = axiosError.response.data as GENERAL_API_ERROR;

            throw {

                success: false,
                message: data.message ?? "errors.server",
                errors: data.errors ?? {},
            };
        }

        throw {

            success: false,
            message: "errors.server",
            errors: {},
        };
    }
};

export const logout = async (): Promise<void> => {
    const token = getAccessToken();
    if (token) {
        await axios.post(`${API_URL}/logout`, null, {
            headers: { Authorization: `Bearer ${token}` },
        });
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_id")
        localStorage.removeItem("user_email")
        localStorage.removeItem("user_name")
        localStorage.removeItem("user_role")
        localStorage.removeItem("user_status")
    }
};

export const getAccessToken = (): string | null => {
    return localStorage.getItem("access_token");
};

export const getUserData = (): AuthUser | null => {

    return {
        id: Number(localStorage.getItem("user_id")),
        email: String(localStorage.getItem("user_email")),
        name: String(localStorage.getItem("user_name")),
        role: String(localStorage.getItem("user_role")) as unknown as USER_ROLE,
        status: String(localStorage.getItem("user_status")) as unknown as USER_STATUS
    }
};
