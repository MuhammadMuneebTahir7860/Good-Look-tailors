import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endPoint } from "../EndPoint";
import { get, post, put } from "../http";
import axios from "axios";

export const getAllBlogs = createAsyncThunk(
    "blogSlice/getAllBlogs",
    async (setLoading) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5002/api/getAllBlogPost`);
            return response.data.data;
        } catch (error) {
            //   setError(error?.response?.data);
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }
);
export const addComent = createAsyncThunk(
    "blogSlice/addComent",
    async ({ data, setCommentLoading, name }) => {
        try {
            setCommentLoading(true);
            const response = await post(`${endPoint}api/addBlogComment`, {
                data,
            });

            console.log(response.data.data, "response after comment");
            return response?.data?.data;
        } catch (error) {
            console.log(error);
        } finally {
            setCommentLoading(false);
        }
    }
);

export const deleteComment = createAsyncThunk(
    "blogSlice/deleteComment",
    async ({ data, setCommentLoading, name }) => {
        try {
            setCommentLoading(true);
            const response = await put(`${endPoint}api/deleteBlogComment`, { data });
            console.log(response.data.data, "response after delete");
            return response?.data?.data;
        } catch (error) {
            console.log(error);
        } finally {
            setCommentLoading(false);
        }
    }
);
export const updateBlogComment = createAsyncThunk(
    "visitorSlice/updateBlogComment",
    async ({ data, setCommentLoading, userId, name }) => {
        try {
            setCommentLoading(true);
            const response = await put(`${endPoint}api/updateBlogComment`, { data });
            console.log(response, "response after update");
            return response.data.data;
        } catch (error) {
            console.log(error);
        } finally {
            setCommentLoading(false);
        }
    }
);
const blogSlice = createSlice({
    name: "blog",
    initialState: {
        allBlogs: [],
        allComments: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBlogs.fulfilled, (state, action) => {
            state.allBlogs = action.payload;
        });
        // builder.addCase(addComent.fulfilled, (state, action) => {
        //     state.allBlogs.blogComment = [
        //         ...state.allBlogs?.blogComment,
        //         action.payload,
        //     ];
        // });
        // builder.addCase(deleteComment.fulfilled, (state, action) => {
        //     const { commentId, blogId } = action.payload;
        //     const currentBlog = state.allBlogs?.find((blog) => blog._id === blogId);
        //     console.log(currentBlog, "currentBlog");
        //     const currentComment = state.currentBlog.blogComment.filter(
        //         (item) => item?.commentId !== commentId
        //     );
        //     console.log(currentComment, "currentComment");
        //     // state.allBlogs.blogComment = state.allBlogs.blogComment.filter(
        //     //   (item) => item.commentId !== commentId
        //     // );
        // });
        // builder.addCase(updateBlogComment.fulfilled, (state, action) => {
        //     const updatedArray = state.allBlogs?.blogComment?.map((item) => {
        //         if (item?.commentId == action.payload.commentId) {
        //             return action.payload;
        //         } else {
        //             return item;
        //         }
        //     });
        //     state.allBlogs.blogComment = updatedArray;
        // });
    },
});

// Action creators are generated for  case reducer function

export default blogSlice.reducer;
