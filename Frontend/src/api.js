// src/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/transactions";

// Create an Axios instance with default configurations
const apiClient = axios.create({
  baseURL: API_URL,
});

// Optional: Add a request interceptor to handle errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call failed:", error);
    return Promise.reject(error); // Reject the promise with the error for handling
  }
);

export const initializeDatabase = async () => {
  try {
    await apiClient.get("/initialize");
  } catch (error) {
    console.error("Error initializing the database:", error);
    throw error; // Rethrow the error for handling
  }
};

export const getTransactions = async (month, page = 1, search = "") => {
  try {
    const response = await apiClient.get("/list", {
      params: { month, page, search },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error; // Rethrow the error for handling
  }
};

export const getStatistics = async (month) => {
  try {
    const response = await apiClient.get("/statistics", {
      params: { month },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error; // Rethrow the error for handling
  }
};

export const getBarChartData = async (month) => {
  try {
    const response = await apiClient.get("/bar-chart", {
      params: { month },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bar chart data:", error);
    throw error; // Rethrow the error for handling
  }
};

export const getPieChartData = async (month) => {
  try {
    const response = await apiClient.get("/pie-chart", {
      params: { month },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching pie chart data:", error);
    throw error; // Rethrow the error for handling
  }
};
