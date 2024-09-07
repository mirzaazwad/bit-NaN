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
        verify: `${BASE_URL}/api/token/verify`,
        refresh: `${BASE_URL}/api/token/access`,
        logout: `${BASE_URL}/api/token/logout`
    },
    files:{
        upload: `${BASE_URL}/api/files/upload`
    },
    profile:{
        update: `${BASE_URL}/api/profile/update`,
        fetch: `${BASE_URL}/api/profile/`
    },
    groups:{
        create: `${BASE_URL}/api/groups/create`,
        fetch: `${BASE_URL}/api/groups/all`,
    },
    chat: {
        history: `${BASE_URL}/api/chat/history`,
        subscribe: `/topic/group`,
        publish: `/app/chat.sendMessage`,
    },
    websocket_url: {
        url: `${BASE_URL}/ws`
    }
}