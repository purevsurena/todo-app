import { Colors } from "@/constants/Colors";
import { DodoListDetailScreenProps } from "@/types/navigation";

export const getHeaderConfig = (type: DodoListDetailScreenProps["type"]) => {
  switch (type) {
    case "today":
      return { title: "Today's Tasks", color: Colors.generic.yellow };
    case "tomorrow":
      return { title: "Tomorrow's Tasks", color: "red" };
    case "todo":
      return { title: "To-Do Tasks", color: Colors.generic.blue };
    case "scheduled":
      return { title: "Scheduled Tasks", color: Colors.generic.orange };
    case "quick-notes":
      return { title: "Quick Notes", color: Colors.generic.turquoise };
    default:
      return { title: "Tasks", color: Colors.generic.greyText };
  }
};
