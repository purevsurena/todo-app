import React from "react";
import { render } from "@testing-library/react-native";
import EmptyComponent from "@/components/shared/Empty";

describe("EmptyComponent", () => {
  it("renders correctly", () => {
    const { getByText } = render(<EmptyComponent />);

    const emptyText = getByText(
      "Your todo list is empty. Add a new reminder to organize your tasks.",
    );
    expect(emptyText).toBeTruthy();
  });

  it("matches the snapshot", () => {
    const { toJSON } = render(<EmptyComponent />);
    expect(toJSON()).toMatchSnapshot();
  });
});
