// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8026/Api_Url",
// });

// // Interceptor to add Bearer Token to headers
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("adminToken");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default API;

import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://craftbyibk-nodejs-api-backend.onrender.com/Api_Url",
  // timeout: 40000,
  // "http://localhost:8026/Api_Url",
  // process.env.NEXT_PUBLIC_API_URL || "http://localhost:8026/Api_Url",
});

// 1. Request Interceptor: Attach token if it exists
API.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 2. Response Interceptor: Catch expired tokens or unauthorized access
API.interceptors.response.use(
  (response) => response, // If request is successful, do nothing
  (error) => {
    const { status } = error.response || {};

    // 401: Token expired or invalid
    // 403: Admin is unverified or blocked
    if (typeof window !== "undefined" && (status === 401 || status === 403)) {
      console.warn("Session expired or unauthorized. Logging out...");

      // Clear admin data only
      localStorage.removeItem("adminToken");

      // Redirect to admin login only
      // We use window.location.href to ensure a full state reset
      if (!window.location.pathname.includes("admin/auth/admin-login")) {
        window.location.href = "admin/auth/admin-login";
      }
    }

    return Promise.reject(error);
  },
);

export default API;
