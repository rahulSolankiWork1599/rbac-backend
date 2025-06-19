import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "@utils/jwt";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyAccessToken(token);
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
