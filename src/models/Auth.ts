export interface LoginResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export type USER_STATUS = "pending" | "active" | "suspended";

export type USER_ROLE = "super_admin" | "admin" | "provider" | "client";


export interface AuthUser {
    id: number,
    email: string,
    name: string,
    role: USER_ROLE,
    status: USER_STATUS
}

