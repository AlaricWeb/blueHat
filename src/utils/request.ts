import axios, { AxiosInstance } from "axios";

// 创建一个 Axios 实例
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
api.interceptors.request.use((config) => {
  config.headers.token = "fsfs";
  return config;
});
// 添加请求拦截器

// 添加响应拦截器
api.interceptors.response.use(
  ({ data }) => {
    // 对响应数据做些什么
    return data.result;
  },
  (error: any) => {
    return Promise.reject(new Error("网络错误"));
  }
);
export default api;
