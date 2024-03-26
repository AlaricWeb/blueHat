import axios, { AxiosInstance, AxiosResponse } from "axios";
interface ApiResponse<T> {
  msg: string;
  data?: T; // 数据可能不存在，所以使用可选属性
  code: number;
}

// 创建一个 Axios 实例
const api: AxiosInstance = axios.create({
  baseURL: "http://your-api-url.com",
});

// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 这里可以添加一些公共的请求头参数或者其他操作
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    // 对响应数据做些什么
    const responseData = response.data;
    // 根据后台返回的格式进行处理
    if (response.status === 200) {
      if (responseData.code === 0) {
        // 如果 code 是 0，则表示请求成功
        return responseData.data;
      } else {
        // 如果 code 不是 0，则抛出异常
        return Promise.reject(new Error(responseData.msg));
      }
    } else {
      // 如果响应状态码不是 200，则抛出异常
      return Promise.reject(new Error("请求失败"));
    }
  },
  (error: any) => {
    // 对响应错误做些什么
    // 处理后端返回的错误信息
    if (error.response) {
      const responseData = error.response.data;
      if (responseData.code !== undefined && responseData.msg !== undefined) {
        // 如果后端返回了错误码和错误消息，则直接抛出异常
        return Promise.reject(new Error(responseData.msg));
      }
    }
    // 如果无法从响应中获取错误信息，则直接抛出网络错误
    return Promise.reject(new Error("网络错误"));
  }
);
export default api;
