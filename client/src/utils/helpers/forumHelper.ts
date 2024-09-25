/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ROUTES } from "../../api/apiRoutes";
import { getData, postData } from "../common/apiCall";
import { ForumCreateResponse, ForumDocumentCreateResponse, ForumFindResponse, ForumReviewCreateResponse, ForumReviewFindResponse, ForumStarCreateResponse, IForumCreateRequest, IForumDocumentCreate, IForumReviewCreate, IForumStarCreate, IForumStarDelete, IStarred } from "../templates/Forum";

export class ForumHelper{
    static async getForumPosts():Promise<ForumFindResponse[]>{
        const forumPosts=await getData(API_ROUTES.forum.fetch);
        return forumPosts.data;
    }

    static async getForumPostById(id:string):Promise<ForumFindResponse>{
        const forumPost=await getData(`${API_ROUTES.forum.fetchById}${id}`);
        return forumPost.data;
    }

    static async postForumPost(data:IForumCreateRequest):Promise<ForumCreateResponse>{
        const forumCreateResponse = await postData(API_ROUTES.forum.create,data);
        return forumCreateResponse.data;
    }

    static async getReviews(forumId:string):Promise<ForumReviewFindResponse[]>{
        const forumFindResponse = await getData(API_ROUTES.forum.review.fetchByForumId+forumId);
        return forumFindResponse.data;
    }

    static async getStarredOrNot(forumId:string):Promise<IStarred>{
        const starredOrNot=await getData(API_ROUTES.forum.star.isStarred+forumId);
        return starredOrNot.data;
    }

    static async addStar(data:IForumStarCreate):Promise<ForumStarCreateResponse>{
        const starred=await postData(API_ROUTES.forum.star.create,data);
        return starred.data;
    }

    static async deleteStar(data:IForumStarDelete):Promise<any>{
        const starred=await postData(API_ROUTES.forum.star.delete,data);
        return starred.data;
    }

    static async postReview(data:IForumReviewCreate):Promise<ForumReviewCreateResponse>{
        const review = await postData(API_ROUTES.forum.review.create,data);
        return review.data;
    }

    static async getForumById(id:string){
        const forum = await getData(API_ROUTES.forum.fetchById+id);
        return forum.data;
    }

    static async postForumChat(data:any){
        const chat = await postData(API_ROUTES.forum.chat.create,data)
        console.log(data)
        return chat.data;
    }

    static async getAllForumChats(forumId:string){
        const chat = await getData(API_ROUTES.forum.chat.fetchByForumId+forumId);
        return chat.data;
    }

    static async postDocument(data:IForumDocumentCreate):Promise<ForumDocumentCreateResponse>{
        const documentCreateResponse = await postData(API_ROUTES.forum.chat.document.create,data);
        return documentCreateResponse.data;
    }
}