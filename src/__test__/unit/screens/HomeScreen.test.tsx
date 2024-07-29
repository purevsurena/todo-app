import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "@/app/(tabs)/index";
import { TodoProvider } from "@/context/TodoContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

describe("HomeScreen Component", () => {
  it("renders correctly and matches the snapshot", () => {
    const { toJSON } = render(
      <SafeAreaProvider>
        <TodoProvider>
          <HomeScreen />
        </TodoProvider>
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
