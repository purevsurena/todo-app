import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const axiosObj = () => {
  const instance = axios.create({
    baseURL: `${apiUrl}/api`,
    headers: {
      Accept: "application/json",
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.message === "Network Error") {
        console.error("Network error - make sure API server is running.");
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export default axiosObj();
