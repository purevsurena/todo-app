import { Colors } from "@/constants/Colors";
import { BottomSheetModalLabelProps } from "@/types/global";
import { DodoListDetailScreenProps } from "@/types/navigation";

export const getHeaderConfig = (type: DodoListDetailScreenProps["type"]) => {
  switch (type) {
    case "today":
      return { title: "Today's Tasks", color: Colors.generic.yellow };
    case "tomorrow":
      return { title: "Tomorrow's Tasks", color: "red" };
    case "archive":
      return { title: "To-Do Tasks", color: Colors.generic.blue };
    case "wishlist":
      return { title: "Archive Tasks", color: Colors.generic.orange };
    case "quick_notes":
      return { title: "Quick Notes", color: Colors.generic.turquoise };
    default:
      return { title: "Tasks", color: Colors.generic.greyText };
  }
};

export const bottomSheetLabels: BottomSheetModalLabelProps[] = [
  { id: 1, label: "Quick Notes", category: "quick_notes" },
  { id: 2, label: "Today", category: "today" },
  { id: 3, label: "Tomorrow", category: "tomorrow" },
  { id: 4, label: "Archive", category: "archive" },
  { id: 5, label: "Wishlist", category: "wishlist" },
];
