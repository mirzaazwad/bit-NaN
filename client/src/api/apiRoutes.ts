const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const API_ROUTES = {
    goals : {
        create: `${BASE_URL}/api/goals/create`,
        fetchByCurrentUser: `${BASE_URL}/api/goals/fetch`,
        update: `${BASE_URL}/api/goals/update`,
        fetchBYId: `${BASE_URL}/api/goals/fetch`,
        delete: `${BASE_URL}/api/goals/delete`
    },
    auth:{
        login: `${BASE_URL}/api/auth/authenticate`,
        register: `${BASE_URL}/api/auth/register`
    }
}