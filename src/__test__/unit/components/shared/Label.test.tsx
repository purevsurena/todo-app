import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Label from "@/components/shared/Label"; // Adjust the import path as necessary

describe("Label Component", () => {
  const onPressMock = jest.fn();
  const label = "Test Label";

  it("renders correctly with inactive state", () => {
    const { getByText } = render(
      <Label onPress={onPressMock} active={false} label={label} />,
    );

    const labelText = getByText(label);

    expect(labelText).toBeTruthy();
  });

  it("calls onPress when clicked", () => {
    const { getByText } = render(
      <Label onPress={onPressMock} active={false} label={label} />,
    );

    const labelText = getByText(label);
    fireEvent.press(labelText);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("matches the snapshot", () => {
    const { toJSON } = render(
      <Label onPress={onPressMock} active={false} label={label} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
