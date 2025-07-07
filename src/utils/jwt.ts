import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_SECRET!;

const ACCESS_TOKEN_EXPIRY = process.env.JWT_ACCESS_EXPIRES_IN! || "15m";
const REFRESH_TOKEN_EXPIRY = process.env.JWT_REFRESH_EXPIRES_IN! || "7d";

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, process.env.ACCESS_SECRET as string, {
    expiresIn: ACCESS_TOKEN_EXPIRY || "1d",
  });
};

export const signRefreshToken = (payload: object) =>
  jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, ACCESS_SECRET);

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, REFRESH_SECRET);
