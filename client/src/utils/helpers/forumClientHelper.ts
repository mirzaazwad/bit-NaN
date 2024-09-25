import { appStore } from "../../stores/redux-store";
import { forumActions } from "../../stores/slices/forum-slice";
import { ForumType, IForumCreateRequest } from "../templates/Forum";
import FileHelper from "./fileHelper";
import { ForumHelper } from "./forumHelper";

export class forumClientHelper {


  static async getForumPosts() {
    const forumPosts = await ForumHelper.getForumPosts();
    appStore.dispatch(forumActions.setForumPosts(forumPosts));
  }

  static searchForumPosts(search: string) {
    appStore.dispatch(forumActions.searchForumPost(search));
  }

  static async addForumPost(data: IForumCreateRequest, file: File|undefined) {
    try {
      const forumPostResponse = await ForumHelper.postForumPost(data);
      appStore.dispatch(
        forumActions.addForumPost({
          ...forumPostResponse,
          modified: forumPostResponse.created,
        })
      );
      if (data.forumType == ForumType.DOCUMENT) {
        if(!file){
            throw Error("File Not Found");
        }
        const url = await FileHelper.uploadFile(file, "forum");
        await ForumHelper.postDocument({
          forumId: forumPostResponse.id,
          url,
        });
        appStore.dispatch(forumActions.addForumDocument({
            forumId:forumPostResponse.id,url
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async refresh(forumId:string){
    appStore.dispatch(
      forumActions.getForumPost(forumId)
    );
    const forumPost=appStore.getState().forum.forumPost;
    if(!forumPost){
      return;
    }
    const updatedForumPost=await ForumHelper.getForumPostById(forumId);
    appStore.dispatch(
      forumActions.replaceForumPost(updatedForumPost)
    )
  }

  

}
