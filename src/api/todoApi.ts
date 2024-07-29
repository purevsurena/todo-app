import axiosObj from "@/api/apiClient";
import { ApiResponse } from "@/api/types";
import { ensureToken } from "@/api/authClient";

export const createTodo = async (
  title: string,
  category: string,
  dueDate?: string,
): Promise<ApiResponse<any>> => {
  try {
    const token = await ensureToken();
    if (!token) throw new Error("No token available");

    const response = await axiosObj.post(
      "/todos",
      {
        title,
        category,
        dueDate,
      },
      {
        headers: { "x-auth-token": token },
      },
    );
    return { data: response.data };
  } catch (error: any) {
    return { error: error.response?.data?.message || "Error creating todo" };
  }
};

export const deleteTodo = async (id: string): Promise<ApiResponse<any>> => {
  try {
    const token = await ensureToken();
    if (!token) throw new Error("No token available");

    const response = await axiosObj.delete(`/todos/${id}`, {
      headers: { "x-auth-token": token },
    });
    return { data: response.data };
  } catch (error: any) {
    return { error: error.response?.data?.message || "Error deleting todo" };
  }
};

export const updateTodoStatus = async (
  id: string,
  completed: boolean,
): Promise<ApiResponse<any>> => {
  try {
    const token = await ensureToken();
    if (!token) throw new Error("No token available");

    const response = await axiosObj.patch(
      `/todos/${id}/status`,
      { completed },
      {
        headers: { "x-auth-token": token },
      },
    );
    return { data: response.data };
  } catch (error: any) {
    return {
      error: error.response?.data?.message || "Error updating todo status",
    };
  }
};

export const getTodoCounts = async (): Promise<ApiResponse<any>> => {
  try {
    const token = await ensureToken();
    if (!token) throw new Error("No token available");

    const response = await axiosObj.get("/todos/counts", {
      headers: { "x-auth-token": token },
    });
    return { data: response.data };
  } catch (error: any) {
    return {
      error: error.response?.data?.message || "Error fetching todo counts",
    };
  }
};

export const getTodosByCategory = async (
  category: string,
  page: number = 1,
  limit: number = 15,
): Promise<ApiResponse<any>> => {
  try {
    const token = await ensureToken();
    if (!token) throw new Error("No token available");

    const response = await axiosObj.get(`/todos/category/${category}`, {
      params: { page, limit },
      headers: { "x-auth-token": token },
    });
    return { data: response.data };
  } catch (error: any) {
    return {
      error:
        error.response?.data?.message || "Error fetching todos by category",
    };
  }
};

export const getAllTodos = async (
  page: number = 1,
  limit: number = 15,
): Promise<ApiResponse<any>> => {
  try {
    const token = await ensureToken();
    if (!token) throw new Error("No token available");

    const response = await axiosObj.get(`/todos/all`, {
      params: { page, limit },
      headers: { "x-auth-token": token },
    });

    return { data: response.data };
  } catch (error: any) {
    return {
      error: error.response?.data?.message || "Error fetching all todos",
    };
  }
};
