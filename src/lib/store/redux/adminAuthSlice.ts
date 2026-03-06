import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import API from "../../../utils/axiosInstance";

// --- AUTH ACTIONS ---

export const registerAdmin = createAsyncThunk(
  "auth/register",
  async (userData: any, thunkAPI) => {
    try {
      const res = await API.post("/adminAuth/register", userData);
      // SAVE EMAIL FOR OTP PAGE
      if (typeof window !== "undefined") {
        localStorage.setItem("pendingEmail", userData.email);
      }
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Registration failed",
      );
    }
  },
);

export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async (data: { email: string; otp: string }, thunkAPI) => {
    try {
      const res = await API.post("/adminAuth/verify-otp", data);
      if (res.data.token) {
        localStorage.setItem("adminToken", res.data.token);
      }
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Verification failed",
      );
    }
  },
);

export const resendOTP = createAsyncThunk(
  "auth/resendOTP",
  async (email: string, thunkAPI) => {
    try {
      const res = await API.post("/adminAuth/resend-otp", { email });
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to resend OTP",
      );
    }
  },
);

export const loginAdmin = createAsyncThunk(
  "auth/login",
  async (credentials: any, thunkAPI) => {
    try {
      const res = await API.post("/adminAuth/login", credentials);
      if (res.data.token) {
        localStorage.setItem("adminToken", res.data.token);
      }
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed",
      );
    }
  },
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email: string, thunkAPI) => {
    try {
      const res = await API.post("/adminAuth/forgot-password", { email });
      // SAVE EMAIL FOR RESET PAGE
      if (typeof window !== "undefined") {
        localStorage.setItem("pendingEmail", email);
      }
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Error processing request",
      );
    }
  },
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data: any, thunkAPI) => {
    try {
      const res = await API.post("/adminAuth/reset-password", data);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Password reset failed",
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    admin: null,
    token:
      typeof window !== "undefined" ? localStorage.getItem("adminToken") : null,
    loading: false,
    successMessage: null as string | null,
    error: null as string | null,
    isVerified: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("adminToken");
      state.admin = null;
      state.token = null;
      state.isVerified = false;
    },
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Login & OTP success
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.admin = action.payload.admin;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isVerified = true;
        state.token = action.payload.token;
        state.loading = false;
      })
      // Handle Success Messages for OTP/Password Resets
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(resendOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      // 2. SCOPED Matcher for Loading (Start)
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") && action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
          state.successMessage = null;
        },
      )
      // 3. SCOPED Matcher for Errors (Rejected)
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") && action.type.endsWith("/rejected"),
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = action.payload || "An unexpected error occurred";
        },
      )

      // 4. SCOPED Matcher to Turn Off Loading (Fulfilled)
      .addMatcher(
        (action) =>
          action.type.startsWith("auth/") && action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        },
      );
  },
});

export const { logout, clearMessages } = authSlice.actions;
export default authSlice.reducer;
