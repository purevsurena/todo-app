import React from "react";
import { render } from "@testing-library/react-native";
import NewReminderButton from "@/components/shared/NewReminderButton";
import { SafeAreaProvider } from "react-native-safe-area-context";

describe("NewReminderButton Component", () => {
  it("matches the snapshot", () => {
    const { toJSON } = render(
      <SafeAreaProvider>
        <NewReminderButton onPress={() => {}} color="blue" />
      </SafeAreaProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
