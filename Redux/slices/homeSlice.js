import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllWorkers = createAsyncThunk(
    "homeSlice/getAllWorkers",
    async () => {
        try {
            const response = await axios.get(`http://localhost:5002/api/getAllWorkerPost`);
            return response.data.data;
        } catch (error) {
            //   setError(error?.response?.data);
            console.log(error.message);
        } finally {
        }
    }
);
export const getPortFolioImages = createAsyncThunk(
    "homeSlice/getPortFolioImages",
    async () => {
        try {
            const response = await axios.get(`http://localhost:5002/api/portfolio`);
            return response.data.data;
        } catch (error) {
            //   setError(error?.response?.data);
            console.log(error.message);
        } finally {
        }
    }
);

export const createAppointment = createAsyncThunk(
    "homeSlice/createAppointment",
    async (data) => {
        try {
            const response = await axios.post(`http://localhost:5002/api/addAppointment`, data);
            console.log(response, 'response');
            return response.data.data;

        } catch (error) {
            //   setError(error?.response?.data);
            console.log(error.message);
        } finally {
        }
    }
);

const homeSlice = createSlice({
    name: "home",
    initialState: {
        allWorkers: [],
        portfolio: []

    },
    extraReducers: (builder) => {
        builder.addCase(getAllWorkers.fulfilled, (state, action) => {
            state.allWorkers = action.payload;
        });
        builder.addCase(getPortFolioImages.fulfilled, (state, action) => {
            state.portfolio = action.payload;
        });

    },
});

// Action creators are generated for  case reducer function

export default homeSlice.reducer;
