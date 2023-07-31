import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { endPoint } from '../EndPoint';
import axios from 'axios';
export const doAdd = createAsyncThunk(
    'counterSlice/doAdd',
    async ({ data }) => {
        try {
            const res = await axios.post(`${endPoint}/todo/add`, data)
            return res.data.todo;
        } catch (err) {
            console.log(err);
        } finally {

        }
    }
)
export const doGet = createAsyncThunk(
    'counterSlice/doGet',
    async () => {
        try {
            const res = await axios.get(`${endPoint}/todo/get`); 
            return res.data.data;
        } catch (err) {
            console.log(err);
        } finally {

        }
    }
)
export const doDelete = createAsyncThunk(
    'counterSlice/doDelete',
    async ({ _id }) => {
        try {
            const res = await axios.delete(`${endPoint}/todo/delete/${_id}`); 
            return res.data.data;
        } catch (err) {
            console.log(err);
        } finally {

        }

        
    }
)
export const doUpdate = createAsyncThunk(
    'counterSlice/doUpdate',
    async ({ data }) => {
        try {
            const res = await axios.put(`${endPoint}/todo/update`,data); 
            return res.data.data;
        } catch (err) {
            console.log(err);
        } finally {

        }
    }
)


const crudSlice = createSlice({
    name: 'counterSlice',
    initialState: { todos: [] },
    extraReducers: builder => {
        builder.addCase(doGet.fulfilled, (state, action) => {
            state.todos =action.payload
        });
        builder.addCase(doAdd.fulfilled, (state, action) => {
            state.todos = [action.payload,...state.todos]
        });
        builder.addCase(doDelete.fulfilled, (state, action) => {
            state.todos = state.todos.filter((item) => {
                if (action.payload?._id !== item?._id) {
                    return item
                }
            })
        });
        builder.addCase(doUpdate.fulfilled, (state, action) => {
            state.todos = state.todos.map((item) => {
                if (action.payload?._id == item?._id) {
                    return action.payload
                }
                else {
                    return item
                }
            })
        });
    }
});

export default crudSlice.reducer