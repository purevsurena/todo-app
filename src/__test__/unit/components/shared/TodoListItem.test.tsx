import React from "react";
import { render } from "@testing-library/react-native";
import TodoListItem from "@/components/shared/TodoListItem";
import { Colors } from "@/constants/Colors";

describe("TodoListItem Component", () => {
  it("should apply correct description based on prop", () => {
    const { getByText } = render(
      <TodoListItem
        description="Test Task"
        color={Colors.generic.blue}
        index={0}
        isChecked={true}
        onToggle={() => {}}
      />,
    );

    const description = getByText("Test Task");
    expect(description).toBeTruthy();
  });

  it("matches the snapshot", () => {
    const { toJSON } = render(
      <TodoListItem
        description="Test Task"
        color={Colors.generic.blue}
        index={0}
        isChecked={false}
        onToggle={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
