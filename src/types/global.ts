// types.d.ts
export interface Task {
  _id: string;
  title: string;
  category: string;
  dueDate: string;
  completed: boolean;
  userId: string;
}

export type GategoryTypes =
  | "quick_notes"
  | "today"
  | "tomorrow"
  | "archive"
  | "wishlist";

export type BottomSheetModalLabelProps = {
  id: number;
  label: string;
  category: GategoryTypes;
};
