import { Response } from "express";

interface ApiResponseOptions {
  success: boolean;
  message: string;
  data?: any;
  errors?: any;
}

export const sendResponse = (
  res: Response,
  statusCode: number,
  { success, message, data, errors }: ApiResponseOptions
) => {
  return res.status(statusCode).json({
    success,
    message,
    data: data || null,
    errors: errors || null,
  });
};
