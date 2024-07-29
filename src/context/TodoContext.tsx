import React, { createContext, useState, useContext, ReactNode } from "react";
import { Task } from "@/types/global";
import * as todoApi from "@/api/todoApi";
import { ApiError } from "@/api/types";

interface TodoContextType {
  todos: { [key: string]: Task[] };
  todoCounts: { [key: string]: number };
  error: string | null;
  addTodo: (title: string, category: string, dueDate?: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  updateTodoStatus: (id: string, completed: boolean) => Promise<void>;
  loadTodos: (category: string, page?: number, limit?: number) => Promise<void>;
  loadAllTodos: (page?: number, limit?: number) => Promise<void>;
  loadTodoCounts: () => Promise<void>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<{ [key: string]: Task[] }>({});
  const [todoCounts, setTodoCounts] = useState<{ [key: string]: number }>({});
  const [error, setError] = useState<ApiError | any>(null);

  const addTodo = async (title: string, category: string, dueDate?: string) => {
    const response = await todoApi.createTodo(title, category, dueDate);
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        [category]: [...(prevTodos[category] || []), response.data],
      }));
      setTodoCounts((prevCounts) => ({
        ...prevCounts,
        [category]: (prevCounts[category] || 0) + 1,
      }));
      setError(null);
    }
  };

  const deleteTodo = async (id: string) => {
    const todoToDelete = Object.values(todos)
      .flat()
      .find((todo) => todo._id === id);
    const response = await todoApi.deleteTodo(id);
    if (response.error) {
      setError(response.error);
    } else {
      setTodos((prevTodos) => {
        const newTodos = { ...prevTodos };
        if (todoToDelete) {
          newTodos[todoToDelete.category] = newTodos[
            todoToDelete.category
          ].filter((todo) => todo._id !== id);
        }
        return newTodos;
      });
      if (todoToDelete) {
        setTodoCounts((prevCounts) => ({
          ...prevCounts,
          [todoToDelete.category]: (prevCounts[todoToDelete.category] || 0) - 1,
        }));
      }
      setError(null);
    }
  };

  const updateTodoStatus = async (id: string, completed: boolean) => {
    const response = await todoApi.updateTodoStatus(id, completed);
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      setTodos((prevTodos) => {
        const newTodos = { ...prevTodos };
        const category = response.data.category;
        newTodos[category] = newTodos[category].map((todo) =>
          todo._id === id ? response.data : todo,
        );
        return newTodos;
      });
      setError(null);
    }
  };

  const loadTodos = async (
    category: string,
    page: number = 1,
    limit: number = 100,
  ) => {
    const response = await todoApi.getTodosByCategory(category, page, limit);
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        [category]: response.data.todos,
      }));
      setError(null);
    }
  };

  const loadAllTodos = async (page: number = 1, limit: number = 15) => {
    const response = await todoApi.getAllTodos(page, limit);
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      // Flatten all todos and add them under "all" category
      setTodos({ all: response.data.todos });
      setError(null);
    }
  };

  const loadTodoCounts = async () => {
    const response = await todoApi.getTodoCounts();
    if (response.error) {
      setError(response.error);
    } else if (response.data) {
      const counts = response.data.reduce(
        (acc: { [key: string]: number }, item: any) => {
          acc[item.category] = item.count;
          return acc;
        },
        {},
      );
      setTodoCounts(counts);
      setError(null);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        todoCounts,
        error,
        addTodo,
        deleteTodo,
        updateTodoStatus,
        loadTodos,
        loadAllTodos,
        loadTodoCounts,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
