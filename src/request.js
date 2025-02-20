// request.js
import axios from "axios";

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://some-domain.com/api/' : '/api',  // 如果是开发环境使用相对路径
  timeout: 1000,
});

export default request;
