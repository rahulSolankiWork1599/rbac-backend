import { Request, Response } from "express";
import { sendResponse } from "@utils/response";

export const createProject = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

//     const alreadyRegisteredUser = await User.findOne({ where: { email } });

//     if (alreadyRegisteredUser) {
//       return sendResponse(res, 400, {
//         success: false,
//         message: "User already exists with this email.",
//       });
//     }

//     // Hashing the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Creating the user
//     const newUser = await User.create({
//       email,
//       password: hashedPassword,
//     });

//     // Respond with success (omit password in response)
//     return sendResponse(res, 201, {
//       success: true,
//       message: "User registered successfully",
//       data: {
//         id: newUser.id,
//         email: newUser.email,
//       },
//     });
//   } catch (error) {
//     return sendResponse(res, 500, {
//       success: false,
//       message: "Something went wrong.",
//       errors:
//         process.env.NODE_ENV === "development" ? error.message : undefined,
//     });
//   }
};
