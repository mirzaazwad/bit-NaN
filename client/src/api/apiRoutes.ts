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
        fetch: `${BASE_URL}/api/profile/`,
        findByEmail: `${BASE_URL}/api/profile/find/`
    },
    timer: {
        save: `${BASE_URL}/api/timer/save`,
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
    },
    forum:{
        create: `${BASE_URL}/api/forum/create`,
        fetchById:`${BASE_URL}/api/forum/find/`,
        update:`${BASE_URL}/api/forum/update`,
        delete:`${BASE_URL}/api/forum/delete`,
        fetch: `${BASE_URL}/api/forum/findAll`,
        model:{
            generate: `${BASE_URL}/api/forum/model/generate`
        },
        review:{
            create: `${BASE_URL}/api/forum/review/create`,
            update: `${BASE_URL}/api/forum/review/update`,
            delete: `${BASE_URL}/api/forum/review/delete`,
            fetchById: `${BASE_URL}/api/forum/review/find/`,
            fetchByForumId: `${BASE_URL}/api/forum/review/findAll/`
        },
        star:{
            create: `${BASE_URL}/api/forum/star/create`,
            delete: `${BASE_URL}/api/forum/star/delete`,
            fetchById: `${BASE_URL}/api/forum/star/find/`,
            fetchByForumId: `${BASE_URL}/api/forum/star/findAll/`,
            isStarred: `${BASE_URL}/api/forum/star/isStarred/`,
        },
        chat:{
            create: `${BASE_URL}/api/forum/chat/create`,
            delete: `${BASE_URL}/api/forum/chat/delete`,
            fetchById: `${BASE_URL}/api/forum/chat/find/`,
            fetchByForumId: `${BASE_URL}/api/forum/chat/findAll/`,
            upvote:{
                create: `${BASE_URL}/api/forum/chat/upvote/create`,
                delete: `${BASE_URL}/api/forum/chat/upvote/delete`,
                fetchById: `${BASE_URL}/api/forum/chat/upvote/find/`,
                fetchByChatId: `${BASE_URL}/api/forum/chat/upvote/findAll/`,
            },
            downvote:{
                create: `${BASE_URL}/api/forum/chat/downvote/create`,
                delete: `${BASE_URL}/api/forum/chat/downvote/delete`,
                fetchById: `${BASE_URL}/api/forum/chat/downvote/find/`,
                fetchByChatId: `${BASE_URL}/api/forum/chat/downvote/findAll/`,
            },
            comment:{
                create: `${BASE_URL}/api/forum/chat/comment/create`,
                update: `${BASE_URL}/api/forum/chat/comment/update`,
                delete: `${BASE_URL}/api/forum/chat/comment/delete`,
                fetchById: `${BASE_URL}/api/forum/chat/comment/find/`,
                fetchByChatId: `${BASE_URL}/api/forum/chat/comment/findAll/`,
                upvote:{
                    create: `${BASE_URL}/api/forum/chat/comment/upvote/create`,
                    delete: `${BASE_URL}/api/forum/chat/comment/upvote/delete`,
                    fetchById: `${BASE_URL}/api/forum/chat/comment/upvote/find/`,
                    fetchByCommentId: `${BASE_URL}/api/forum/chat/comment/upvote/findAll/`,
                },
                downvote:{
                    create: `${BASE_URL}/api/forum/chat/comment/downvote/create`,
                    delete: `${BASE_URL}/api/forum/chat/comment/downvote/delete`,
                    fetchById: `${BASE_URL}/api/forum/chat/comment/downvote/find/`,
                    fetchByCommentId: `${BASE_URL}/api/forum/chat/comment/downvote/findAll/`,
                }
            },
            document:{
                create: `${BASE_URL}/api/forum/chat/document/create`,
                fetchByChatId: `${BASE_URL}/api/forum/chat/document/find/`,
            }
        }
    }
}