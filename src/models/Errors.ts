export interface GENERAL_API_ERROR {
    success: boolean;
    message: string;
    errors: {
        [key: string]: string[];
    };
}
