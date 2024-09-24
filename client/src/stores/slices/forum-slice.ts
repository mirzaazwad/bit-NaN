import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ForumFindResponse } from "../../utils/templates/Forum";

interface IDoc{
  forumId:string;
  url:string;
}

export interface Forum {
  forumPosts: ForumFindResponse[];
  filteredForumPosts: ForumFindResponse[];
  searchCriteria: string;
  error: string;
  document:IDoc[];
  forumPost:ForumFindResponse|undefined;
}

const initForumState: Forum = {
  forumPosts: [],
  filteredForumPosts: [],
  searchCriteria: "",
  error: "",
  document:[],
  forumPost:undefined
};

export const forumSlice = createSlice({
  name: "forum",
  initialState: initForumState,
  reducers: {
    setForumPosts: (state, action: PayloadAction<ForumFindResponse[]>) => {
      state.forumPosts = action.payload;
      state.filteredForumPosts = action.payload;
      
    },
    addForumPost: (state, action: PayloadAction<ForumFindResponse>) => {
      state.forumPosts.unshift(action.payload);
      if(action.payload.title.toLowerCase().includes(state.searchCriteria)){
        state.filteredForumPosts.unshift(action.payload);
      }
    },
    removeForumPost: (state, action: PayloadAction<string>) => {
      state.forumPosts.filter((forum) => forum.id !== action.payload);
    },
    replaceForumPost: (state, action: PayloadAction<ForumFindResponse>) => {
      const updatedPost = action.payload;
      const postIndex = state.forumPosts.findIndex(post => post.id === updatedPost.id);
      if (postIndex !== -1) {
        state.forumPosts[postIndex] = updatedPost;
      } else {
        state.forumPosts.push(updatedPost);
      }
      state.filteredForumPosts = state.forumPosts.filter((forum) =>
        forum.title.toLowerCase().includes(state.searchCriteria.toLowerCase())
      );
    },    
    searchForumPost: (state, action: PayloadAction<string>) => {
      const search = action.payload;
      state.searchCriteria = search;
      if (search) {
        state.filteredForumPosts = state.forumPosts.filter((forum) =>
          forum.title.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        state.filteredForumPosts = state.forumPosts;
      }
    },
    addForumDocument:(state,action:PayloadAction<IDoc>)=>{
      state.document.push(action.payload);
    },
    getForumPost:(state,action:PayloadAction<string>)=>{
      state.forumPost=state.forumPosts.find((forum)=>forum.id===action.payload);
    },
    removeForumDocument:(state,action:PayloadAction<string>)=>{
      const id=action.payload;
      state.forumPosts=state.forumPosts.filter((forum)=>forum.id!==id);
      state.filteredForumPosts = state.forumPosts.filter((forum) =>
        forum.title.toLowerCase().includes(state.searchCriteria.toLowerCase())
      );
    },
  },
});

export const forumActions = forumSlice.actions;
export const forumReducer = forumSlice.reducer;
