export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export type PhotoMetadata = {
  title: string;
  tags: string[];
  date: string;
};
