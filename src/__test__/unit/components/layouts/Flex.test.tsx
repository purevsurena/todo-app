/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react-native";
import Flex from "@/components/layouts/Flex";
import { Text } from "react-native";

describe("Flex Component", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <Flex>
        <Text>Test Child</Text>
      </Flex>,
    );
    expect(getByText("Test Child")).toBeTruthy();
  });

  it("should apply the flex style correctly", () => {
    const { getByTestId } = render(<Flex flex={1} testID="flexComponent" />);
    const flexComponent = getByTestId("flexComponent");
    expect(flexComponent.props.style).toContainEqual({ flex: 1 });
  });

  it("should merge style prop correctly", () => {
    const { getByTestId } = render(
      <Flex style={{ backgroundColor: "red" }} testID="flexComponent" />,
    );
    const flexComponent = getByTestId("flexComponent");
    expect(flexComponent.props.style).toContainEqual({
      backgroundColor: "red",
    });
  });

  it("matches the snapshot", () => {
    const { toJSON } = render(
      <Flex
        flex={1}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "blue" }}
      >
        <Text>Snapshot Test</Text>
      </Flex>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
