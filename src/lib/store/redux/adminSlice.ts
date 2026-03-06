import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/utils/axiosInstance";

const BASE_URL = "http://localhost:8026/Api_Url";
// process.env.NEXT_PUBLIC_API_URL || "http://localhost:8026/Api_Url";
// process.env.NEXT_PUBLIC_API_URL ||
// "https://craftbyibk-nodejs-api-backend.onrender.com/Api_Url";

// --- PRODUCT ACTIONS ---
export const uploadCollectionsProduct = createAsyncThunk(
  "admin/uploadCollections",
  async (formData: FormData, thunkAPI) => {
    try {
      const res = await API.post(
        `${BASE_URL}/adminUploadImages/upload/collections`,
        formData,
      );
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

export const uploadShopProduct = createAsyncThunk(
  "admin/uploadShop",
  async (formData: FormData, thunkAPI) => {
    try {
      const res = await API.post(
        `${BASE_URL}/adminUploadImages/upload/shop`,
        formData,
      );
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

export const uploadOtherProduct = createAsyncThunk(
  "admin/uploadOther",
  async (formData: FormData, thunkAPI) => {
    try {
      const res = await API.post(
        `${BASE_URL}/adminUploadImages/upload/other`,
        formData,
      );
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

export const getAllCategoryData = createAsyncThunk(
  "admin/getAllData",
  async (_, thunkAPI) => {
    try {
      const res = await API.get(`${BASE_URL}/adminUploadImages/all-products`);
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

// --- NOTIFICATION ACTIONS ---
export const createNotification = createAsyncThunk(
  "admin/createNotif",
  async (data: any, thunkAPI) => {
    try {
      const res = await API.post(
        `${BASE_URL}/notificationMessages/notifications`,
        data,
      );
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

export const getNotifications = createAsyncThunk(
  "admin/getNotifs",
  async (_, thunkAPI) => {
    try {
      const res = await API.get(
        `${BASE_URL}/notificationMessages/notifications/get`,
      );
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

export const deleteNotification = createAsyncThunk(
  "admin/deleteNotif",
  async (id: string, thunkAPI) => {
    try {
      await API.delete(`${BASE_URL}/notificationMessages/notifications/${id}`);
      return id;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

// --- CONTACT ACTION ---
export const contactUsSendEmail = createAsyncThunk(
  "admin/sendEmail",
  async (data: any, thunkAPI) => {
    try {
      const res = await API.post(
        `${BASE_URL}/adminUploadImages/contact-us`,
        data,
      );
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

// --- NEWSLETTER ACTION ---
export const subscribeToNewsletter = createAsyncThunk(
  "admin/subscribeNewsletter",
  async (email: string, thunkAPI) => {
    try {
      const res = await API.post(
        `${BASE_URL}/adminUploadImages/newsletter/subscribe`,
        { email },
      );
      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

// --- ADMIN DELETE PRODUCT ACTION ---
export const deleteProductsAction = createAsyncThunk(
  "admin/deleteProducts",
  async ({ ids, category }: { ids: string[]; category: string }, thunkAPI) => {
    try {
      await API.delete(`${BASE_URL}/adminUploadImages/delete-products`, {
        data: { productIds: ids, categoryType: category },
      });
      return { ids, category };
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  },
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    allProducts: { collectionsData: [], shopData: [], otherData: [] },
    notifications: [],
    loading: false,
    newsletterLoading: false, // Added this
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoryData.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.loading = false;
      })
      .addCase(getAllCategoryData.pending, (state) => {
        state.loading = true;
      })
      /* NEWSLETTER CASES */
      .addCase(subscribeToNewsletter.pending, (state) => {
        state.newsletterLoading = true;
        state.error = null;
      })
      .addCase(subscribeToNewsletter.fulfilled, (state) => {
        state.newsletterLoading = false;
      })
      .addCase(subscribeToNewsletter.rejected, (state, action) => {
        state.newsletterLoading = false;
        state.error = action.payload as string;
      })
      /* NOTIFICATION CASES */
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload;
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        state.notifications = state.notifications.filter(
          (n: any) => n._id !== action.payload,
        );
      })

      // In extraReducers:
      .addCase(deleteProductsAction.fulfilled, (state, action) => {
        const { ids, category } = action.payload;
        (state.allProducts as any)[category] = (state.allProducts as any)[
          category
        ].filter((p: any) => !ids.includes(p._id));
      });
  },
});

export default adminSlice.reducer;
