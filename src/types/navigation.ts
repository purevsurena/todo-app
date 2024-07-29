import { RouteProp } from "@react-navigation/native";

export interface DodoListDetailScreenProps {
  type: "today" | "tomorrow" | "archive" | "wishlist" | "quick_notes" | "all";
}

export type RootStackParamList = {
  Home: undefined;
  "todo-list-detail": {
    type: "today" | "tomorrow" | "archive" | "wishlist" | "quick_notes" | "all";
  };
  // Add other screens here as needed
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type TodoListDetailRouteProp = RouteProp<
  { params: DodoListDetailScreenProps },
  "params"
>;
