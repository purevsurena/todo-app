import React from "react";
import { render } from "@testing-library/react-native";
import Card from "@/components/shared/Card";
import { Colors } from "@/constants/Colors";

describe("Card Component", () => {
  it("should render the card with the correct title and subtitle", () => {
    const { getByText } = render(
      <Card
        iconName="home"
        iconColor={Colors.generic.blue}
        title="Card Title"
        subtitle="Card Subtitle"
        onPress={() => {}}
      />,
    );

    expect(getByText("Card Title")).toBeTruthy();
    expect(getByText("Card Subtitle")).toBeTruthy();
  });

  it("matches the snapshot", () => {
    const { toJSON } = render(
      <Card
        iconName="home"
        iconColor={Colors.generic.blue}
        title="Card Title"
        subtitle="Card Subtitle"
        onPress={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
