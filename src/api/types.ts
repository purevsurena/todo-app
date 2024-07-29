export interface ApiError {
  message: string;
  statusCode?: number;
  details?: any;
}

export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
}
