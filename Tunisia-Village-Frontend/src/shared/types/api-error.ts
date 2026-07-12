export interface ApiError {
  success: false;
  message: string;
  statusCode: number;
}

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
