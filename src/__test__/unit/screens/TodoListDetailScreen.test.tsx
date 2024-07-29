import React from "react";
import { render } from "@testing-library/react-native";
import TodoListDetailScreen from "@/app/todo-list-detail";
import { NavigationContainer } from "@react-navigation/native";
import { TodoProvider } from "@/context/TodoContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Mock the API functions used in the TodoContext
jest.mock("@/api/todoApi");

describe("TodoListDetailScreen", () => {
  const renderWithProviders = (component: React.ReactElement) => {
    return render(
      <SafeAreaProvider>
        <NavigationContainer>
          <TodoProvider>{component}</TodoProvider>
        </NavigationContainer>
      </SafeAreaProvider>,
    );
  };

  it("matches the snapshot", () => {
    const { toJSON } = renderWithProviders(<TodoListDetailScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
