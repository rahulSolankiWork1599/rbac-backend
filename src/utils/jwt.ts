import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  });
};