const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const API_ROUTES = {
    goals : {
        create: `${BASE_URL}/api/v1/goals/create`,
        fetchByCurrentUser: `${BASE_URL}/api/v1/goals/fetch`,
        update: `${BASE_URL}/api/v1/goals/update`,
        fetchBYId: `${BASE_URL}/api/v1/goals/fetch`,
        delete: `${BASE_URL}/api/v1/goals/delete`
    },
    auth:{
        login: `${BASE_URL}/api/v1/auth/authenticate`,
        register: `${BASE_URL}/api/v1/auth/register`
    }
}