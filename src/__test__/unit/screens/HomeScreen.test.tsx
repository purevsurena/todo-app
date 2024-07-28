import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "@/app/(tabs)/index";

describe("HomeScreen Component", () => {
  it("renders correctly and matches the snapshot", () => {
    const { toJSON } = render(<HomeScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
