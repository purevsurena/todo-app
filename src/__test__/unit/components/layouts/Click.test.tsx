import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Click from "@/components/layouts/Click";
import { Text } from "react-native";

describe("Click Component", () => {
  const defaultProps = {
    onPress: jest.fn(),
    onLongPress: jest.fn(),
    disabled: false,
    children: <Text>Test Children</Text>,
    style: {},
    hitSlop: 10,
  };

  it("renders correctly", () => {
    const { getByText } = render(<Click {...defaultProps} />);
    expect(getByText("Test Children")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const { getByText } = render(<Click {...defaultProps} />);
    fireEvent.press(getByText("Test Children"));
    expect(defaultProps.onPress).toHaveBeenCalled();
  });

  it("calls onLongPress when long pressed", () => {
    const { getByText } = render(<Click {...defaultProps} />);
    fireEvent(getByText("Test Children"), "onLongPress");
    expect(defaultProps.onLongPress).toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const { toJSON } = render(<Click {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
