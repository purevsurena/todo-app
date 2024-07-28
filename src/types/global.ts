// types.d.ts
export interface Task {
  _id: string;
  title: string;
  category: string;
  dueDate: string;
  completed: boolean;
  userId: string;
}
