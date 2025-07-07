import { Response } from "express";

interface ApiResponseOptions {
  success: boolean;
  message: string;
  data?: any;
  errors?: any;
  meta?: any;
}

export const sendResponse = (
  res: Response,
  statusCode: number,
  { success, message, data, errors, meta }: ApiResponseOptions
) => {
  return res.status(statusCode).json({
    success,
    message,
    data: data || null,
    errors: process.env.NODE_ENV === "development" ? errors : undefined,
    ...(meta && { meta }),
  });
};
