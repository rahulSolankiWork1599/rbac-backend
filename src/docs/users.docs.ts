/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users routes
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get paginated list of users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by name or email
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [createdAt, email]
 *           default: createdAt
 *         description: Field to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "User list fetched successfully"
 *               data:
 *                 - id: "uuid-1"
 *                   name: "Rahul Solanki"
 *                   email: "rahul@example.com"
 *                 - id: "uuid-2"
 *                   name: "Jane Doe"
 *                   email: "jane@example.com"
 *               meta:
 *                 total: 25
 *                 per_page: 10
 *                 current_page: 1
 *                 last_page: 3
 *                 has_next: true
 *       500:
 *         description: Internal server error
 */
