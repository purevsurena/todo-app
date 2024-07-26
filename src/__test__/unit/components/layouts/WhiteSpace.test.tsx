import React from "react";
import { render } from "@testing-library/react-native";
import WhiteSpace from "@/components/layouts/WhiteSpace";

describe("WhiteSpace Component", () => {
  it("renders correctly with given size", () => {
    const { getByTestId } = render(<WhiteSpace size="24" />);
    const whiteSpace = getByTestId("white-space");
    expect(whiteSpace.props.style).toContainEqual({ height: 24 });
  });

  it("applies additional styles correctly", () => {
    const additionalStyle = { backgroundColor: "red" };
    const { getByTestId } = render(
      <WhiteSpace size="24" style={additionalStyle} />,
    );
    const whiteSpace = getByTestId("white-space");
    expect(whiteSpace.props.style).toContainEqual({ height: 24 });
    expect(whiteSpace.props.style).toContainEqual(additionalStyle);
  });

  it("matches snapshot", () => {
    const { toJSON } = render(<WhiteSpace size="12" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
