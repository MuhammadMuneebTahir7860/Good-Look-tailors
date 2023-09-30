import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const doSignup = createAsyncThunk(
  "AuthSlice/doSignup",
  async ({ data, setLoading }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:5002/api/user/signup`,
        {
          data,
        }
      );
      // toast.success(response.data.message);
      await window.localStorage.setItem("jwtoken", response.data.data.token);
      axios.defaults.headers.common["jwtoken"] = response.data.data.token;
      return response.data.data;
    } catch (error) {
      // setError(error?.response?.data);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
);

export const doLogin = createAsyncThunk(
  "AuthSlice/doLogin",
  async ({ data, setLoading, router }) => {
    try {
      // setLoading(true);
      const response = await axios.post(
        `http://localhost:5002/api/user/login`,
        {
          email: data.email,
          password: data.password,
        }
      );
      console.log(response, "response");
      if (response.data) {
        router.push("/");
      }
      await window.localStorage.setItem("jwtoken", response.data.data.token);
      await window.localStorage.setItem("loggedInId", response.data.data._id);
      //   axios.defaults.headers.common["jwtoken"] = response.data.data.token;
      return response.data.data;
    } catch (error) {
      if (error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
);
export const doGetLoggedInUser = createAsyncThunk(
  "AuthSlice/doGetLoggedInUser",
  async ({ token, setLoading }) => {
    try {
      setLoading(true);
      const user = await axios.post(
        `http://localhost:5002/api/user/getLoggedInUser`,
        {
          token: token,
        }
      );
      return user.data.data;
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }
);
export const getAllUsers = createAsyncThunk(
  "AuthSlice/getAllUsers",
  async () => {
    try {
      const user = await get(`${endPoint}api/user/getAllUsers`);
      return user.data.data;
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  }
);
export const doLogout = createAsyncThunk("AuthSlice/doLogout", async () => {
  await window.localStorage.removeItem("jwtoken");
  return;
});

export const doUpdateUser = createAsyncThunk(
  "AuthSlice/doUpdateUser",
  async ({ userData, setSubmitLoading, setMsg, name }) => {
    try {
      setSubmitLoading(true);
      const res = await put(`${endPoint}api/user/updateUser`, {
        data: userData,
      });
      setMsg("Successfully Updated!");
      return res.data.data;
    } catch (error) {
      console.log(error.message);
    } finally {
      setSubmitLoading(false);
    }
  }
);

export const giveFeedback = createAsyncThunk(
  "AuthSlice/giveFeedback",
  async ({ data, setFeedLoading }) => {
    try {
      setFeedLoading(true);
      const response = await put(`${endPoint}api/user/giveFeebback`, {
        data,
      });
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    } finally {
      setFeedLoading(false);
    }
  }
);
export const getFeedbackData = createAsyncThunk(
  "AuthSlice/getFeedbackData",
  async (productUserId) => {
    try {
      const feedBack = await get(
        `${endPoint}api/user/getFeedbacks/${productUserId}`
      );
      return feedBack.data.data?.reverse();
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const deleteFeedback = createAsyncThunk(
  "AuthSlice/deleteFeedback",
  async ({ data, setFeedLoading }) => {
    try {
      setFeedLoading(true);
      const response = await put(`${endPoint}api/user/deleteFeedback`, {
        data,
      });
      return response.data.data.commentId;
    } catch (error) {
      console.log(error);
    } finally {
      setFeedLoading(false);
    }
  }
);
export const updateFeedback = createAsyncThunk(
  "AuthSlice/updateFeedback",
  async ({ data, setFeedLoading }) => {
    try {
      setFeedLoading(true);
      const response = await put(`${endPoint}api/user/updateFeedback`, {
        data,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      setFeedLoading(false);
    }
  }
);
// export const doForgotPasswordSendOtp = createAsyncThunk(
//   "AuthSlice/doForgotPasswordSendOtp",
//   async ({ email, setLoading, setError, setStep }) => {
//     try {
//       setLoading(true);
//       const user = await post(`${endPoint}api/user/sendOtp`, {
//         email: email,
//         role: "user",
//       });
//       setStep(1);
//       setError("");
//       return;
//     } catch (error) {
//       setError(error?.response?.data?.msg);
//     } finally {
//       setLoading(false);
//     }
//   }
// );
// export const doForgotPasswordVerifyOtp = createAsyncThunk(
//   "AuthSlice/doForgotPasswordVerifyOtp",
//   async ({ otp, email, setLoading, setError, setStep }) => {
//     try {
//       setLoading(true);
//       const res = await post(`${endPoint}api/user/verifyOtp`, {
//         code: otp,
//         email,
//         role: "user",
//       });
//       if (res.data?.msg == "correct") {
//         setStep(2);
//         setError("");
//       }
//       return;
//     } catch (error) {
//       setError(error?.response?.data?.msg);
//     } finally {
//       setLoading(false);
//     }
//   }
// );
// export const doForgotPasswordSavePassword = createAsyncThunk(
//   "AuthSlice/doForgotPasswordSavePassword",
//   async ({ email, password, otp, setLoading, setError, setStep, navigate }) => {
//     try {
//       setLoading(true);
//       const res = await post(`${endPoint}api/user/savePassword`, {
//         password,
//         email,
//         otp,
//         role: "user",
//       });
//       if (res.data?.msg == "saved") {
//         await post(`${endPoint}api/save-audit-logs`, {
//           data: {
//             userName: res?.data?.data?.name ? res?.data?.data?.name : email,
//             userRole: "user",
//             userId: res?.data?.data?._id,
//             change: "Client used Forgot Password",
//           },
//         });
//         navigate("/login");
//         setError("");
//         setStep(0);
//       }
//       return;
//     } catch (error) {
//       setError(error?.response?.data?.msg);
//     } finally {
//       setLoading(false);
//     }
//   }
// );

export const addFvrtProduct = createAsyncThunk(
  "AuthSlice/addFvrtProduct",
  async (body) => {
    // setLoading(true);
    try {
      const response = await put(`${endPoint}api/user/addFavourite`, body);
      if (response.data) {
        toast.success("Product Added To Favourite");
      }
      return response?.data;
    } catch (error) {
      console.log(error.data.message);
      // toast.error(error.data.message);
    } finally {
      // setLoading(false);
    }
  }
);
export const removeFvrtProduct = createAsyncThunk(
  "AuthSlice/removeFvrtProduct",
  async (body) => {
    // setLoading(true);
    try {
      const response = await put(`${endPoint}api/user/removeFavourite`, body);
      if (response.data) {
        toast.success("Product Deleted From Favourite");
      }
      return response?.data;
    } catch (error) {
      console.log(error.data.message);
      toast.error(error.message);
    } finally {
      // setLoading(false);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    users: {},
    isUserLoggedIn: false,
    fvrtArray: [],
    allUsers: [],
    comments: [],
  },
  extraReducers: (builder) => {
    builder.addCase(doSignup.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isUserLoggedIn = action.payload ? true : false;
    });
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isUserLoggedIn = action.payload ? true : false;
    });
    // builder.addCase(doGetLoggedInUser.fulfilled, (state, action) => {
    //   state.users = action.payload;
    //   state.fvrtArray = action.payload.favouriteProducts;

    //   state.isUserLoggedIn = action.payload ? true : false;
    // });
    builder.addCase(doLogout.fulfilled, (state, action) => {
      state.users = {};
      state.isUserLoggedIn = false;
    });
    // builder.addCase(getAllUsers.fulfilled, (state, action) => {
    //   state.allUsers = action.payload;
    // });
    // builder.addCase(doUpdateUser.fulfilled, (state, action) => {
    //   state.users = action.payload;
    // });
    // builder.addCase(addFvrtProduct.fulfilled, (state, action) => {
    //   state.fvrtArray = [...state.fvrtArray, action.payload._id];
    // });
    // builder.addCase(removeFvrtProduct.fulfilled, (state, action) => {
    //   const newData = state.fvrtArray.filter(
    //     (item) => item !== action.payload._id
    //   );
    //   state.fvrtArray = newData;
    // });
    // builder.addCase(getFeedbackData.fulfilled, (state, action) => {
    //   state.comments = action.payload;
    // });
    // builder.addCase(giveFeedback.fulfilled, (state, action) => {
    //   state.comments = [...state.comments, action.payload];
    // });
    // builder.addCase(deleteFeedback.fulfilled, (state, action) => {
    //   let commentAfterDelete = state.comments.filter(
    //     (item) => item.commentId !== action.payload
    //   );
    //   state.comments = commentAfterDelete;
    // });
    // builder.addCase(updateFeedback.fulfilled, (state, action) => {
    //   const updatedArray = state.comments?.map((item) => {
    //     if (item?.commentId == action.payload.commentId) {
    //       return action.payload;
    //     } else {
    //       return item;
    //     }
    //   });
    //   state.comments = updatedArray;
    // });
  },
});

// Action creators are generated for  case reducer function

export default AuthSlice.reducer;
