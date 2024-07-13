const BASE_URL = process.env.API_URL;
export const API_ROUTES = {
    goals : {
        create: `${BASE_URL}/api/goals/create`,
        fetchByCurrentUser: `${BASE_URL}/api/goals/fetch`,
        update: `${BASE_URL}/api/goals/update`,
        fetchBYId: `${BASE_URL}/api/goals/fetch`,
        delete: `${BASE_URL}/api/goals/delete`
    }
}