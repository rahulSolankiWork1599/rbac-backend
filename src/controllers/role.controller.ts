import { Role } from "@models/role.model";
import { sendResponse } from "@utils/response";
import { Request, Response } from "express";

export const getRolesList = async (req: Request, res: Response) => {
  try {
    const {
      page = "1",
      limit = "10",
      search = "",
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query as Record<string, string>;

    const pageNumber = Math.max(parseInt(page) || 1, 1);
    const limitNumber = Math.max(parseInt(limit) || 10, 1);
    const offset = (pageNumber - 1) * limitNumber;
    const orderDirection = sortOrder.toUpperCase() === "ASC" ? "ASC" : "DESC";

    // Optional: validate and sanitize sort field
    const validSortFields = ["createdAt", "name"];

    const sortByField = validSortFields.includes(sortBy) ? sortBy : "createdAt";

    // 2. Define filters (search by name or email)
    const where = {};

    // 3. Query with filters, pagination, sorting

    const { rows, count } = await Role.findAndCountAll({
      where,
      limit: limitNumber,
      offset,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      order: [[sortByField, orderDirection]],
    });

    const meta = {
      total: count,
      per_page: limitNumber,
      current_page: pageNumber,
      last_page: Math.ceil(count / limitNumber),
      has_next: offset + rows.length < count,
    };

    return sendResponse(res, 200, {
      success: true,
      message: "Roles list fetched successfully",
      data: rows,
      meta,
    });
  } catch (error) {
    return sendResponse(res, 500, {
      success: false,
      message: "Something went wrong.",
      errors: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};
