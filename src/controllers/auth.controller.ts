import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "@models/user.model";

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
