import React from "react";
import { render } from "@testing-library/react-native";
import NewReminderButton from "@/components/shared/NewReminderButton";

describe("NewReminderButton Component", () => {
  it("matches the snapshot", () => {
    const { toJSON } = render(
      <NewReminderButton onPress={() => {}} color="blue" />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
