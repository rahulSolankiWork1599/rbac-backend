import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "@models/user.model";
import { generateToken, signRefreshToken } from "@utils/jwt";
import { sendResponse } from "@utils/response";
import { RefreshToken } from "@models/refreshToken.model";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const alreadyRegisteredUser = await User.findOne({ where: { email } });

    if (alreadyRegisteredUser) {
      return sendResponse(res, 400, {
        success: false,
        message: "User already exists with this email.",
      });
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating the user
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    // Respond with success (omit password in response)
    return sendResponse(res, 201, {
      success: true,
      message: "User registered successfully",
      data: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (error) {
    return sendResponse(res, 500, {
      success: false,
      message: "Something went wrong.",
      errors:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return sendResponse(res, 400, {
        success: false,
        message: "Invalid email or password",
      });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendResponse(res, 400, {
        success: false,
        message: "Invalid email or password",
      });
    }

    // 3. Generate JWT
    const accessToken = generateToken({ id: user.id, email: user.email });
    const refreshToken = signRefreshToken({ id: user.id, email: user.email });

    await RefreshToken.create({ userId: user.id, token: refreshToken });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return sendResponse(res, 200, {
      success: true,
      message: "Login successful",
      data: {
        id: user.id,
        email: user.email,
        token: accessToken,
      },
    });
  } catch (error) {
    return sendResponse(res, 500, {
      success: false,
      message: "Something went wrong.",
      errors:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
