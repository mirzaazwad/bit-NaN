/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosAuth from "../../config/axios/AxiosAuth";

async function handleRequest<T>(request: () => Promise<T>): Promise<T | any> {
    try {
        return await request();
    } catch (error: any) {
        return {
            error:error.message
        };
    }
}

export async function getData(url: string) {
    return handleRequest(() => AxiosAuth.get(url));
}

export async function postData(url: string, data: any) {
    return handleRequest(() => AxiosAuth.post(url, data));
}

export async function putData(url: string, data: any) {
    return handleRequest(() => AxiosAuth.put(url, data));
}

export async function deleteData(url: string) {
    return handleRequest(() => AxiosAuth.delete(url));
}