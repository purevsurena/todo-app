import React from "react";
import { render } from "@testing-library/react-native";
import QuickNotesCard from "@/components/shared/QuckNotesCard";
import { Colors } from "@/constants/Colors";
import { Task } from "@/types/global";

describe("QuickNotesCard Component", () => {
  const tasks: Task[] = [
    {
      _id: "1",
      title: "Task 1",
      category: "today",
      dueDate: "2024-07-26T00:00:00.000Z",
      completed: false,
      userId: "user-1",
    },
    {
      _id: "2",
      title: "Task 2",
      category: "tomorrow",
      dueDate: "2024-07-27T00:00:00.000Z",
      completed: true,
      userId: "user-1",
    },
  ];

  it("should render the card with the correct title, subtitle, and tasks", () => {
    const { getByTestId } = render(
      <QuickNotesCard
        iconName="note"
        iconColor={Colors.generic.blue}
        title="Quick Notes"
        subtitle="Today"
        tasks={tasks}
        onPress={() => {}}
      />,
    );

    expect(getByTestId("cardTitle").props.children).toBe("Quick Notes");
    expect(getByTestId("cardSubtitle").props.children).toBe("Today");
    expect(getByTestId("task-0").props.children).toBe("Task 1");
    expect(getByTestId("task-1").props.children).toBe("Task 2");
  });

  it("matches the snapshot", () => {
    const { toJSON } = render(
      <QuickNotesCard
        iconName="note"
        iconColor={Colors.generic.blue}
        title="Quick Notes"
        subtitle="Today"
        tasks={tasks}
        onPress={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
