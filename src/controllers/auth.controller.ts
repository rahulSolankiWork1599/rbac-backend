import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "@models/user.model";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating the user
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    // Respond with success (omit password in response)
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 3. Generate JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
};
