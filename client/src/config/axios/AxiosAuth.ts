import Axios, {AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse} from 'axios';

class AxiosAuth {
    private axiosInstance: AxiosInstance;
    
    constructor(){
        this.axiosInstance = Axios.create();
        this.axiosInstance.interceptors.request.use(
            function AuthTokenInject(
                requestConfig: InternalAxiosRequestConfig
              ): InternalAxiosRequestConfig {
                const token = localStorage.getItem("token");
          
                requestConfig.headers.Authorization = `Bearer ${token}`;

                return requestConfig;
            },
            (error) => {
                return Promise.reject(error);
            }
    
        );

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error) => {
                if(error.response?.status === 401){
                    console.log("Unauthorized");
                }
                return Promise.reject(error);
            }
        );
    }

    public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get<T>(url, config);
    }

    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data, config);
    }

    public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.put<T>(url, data, config);
    }

    public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.delete<T>(url, config);
    }
}

export default new AxiosAuth();