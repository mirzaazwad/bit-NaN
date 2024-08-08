const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const API_ROUTES = {
    goals : {
        create: `${BASE_URL}/api/goals/create`,
        fetchByCurrentUser: `${BASE_URL}/api/goals/fetchAll`,
        update: `${BASE_URL}/api/goals/update`,
        fetchBYId: `${BASE_URL}/api/goals/fetch`,
        fetchByDate: `${BASE_URL}/api/goals/fetchToday`,
        delete: `${BASE_URL}/api/goals`
    },
    auth:{
        login: `${BASE_URL}/api/auth/login`,
        register: `${BASE_URL}/api/auth/register`,
        verify: `${BASE_URL}/api/auth/verify-access`,
        refresh: `${BASE_URL}/api/auth/refresh-token`,
        logout: `${BASE_URL}/api/auth/logout`
    },
    files:{
        upload: `${BASE_URL}/api/files/upload`
    },
    profile:{
        update: `${BASE_URL}/api/profile/update`,
        fetch: `${BASE_URL}/api/profile/`
    },
    groups:{
        create: `${BASE_URL}/api/groups/create`
    }
}