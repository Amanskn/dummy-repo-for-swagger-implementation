const { Router } = require("express");

const userRouter = Router();

// Dummy database
const users = [
  { id: 1, name: "Aman Maddhesia" },
  { id: 2, name: "Sandeep Tiwari" },
  { id: 3, name: "Birendra Mahto" },
];

// Routes

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                 message:
 *                   type: string
 *                   example: Fetched all users successfully
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                        type: integer
 *                        example: 1
 *                       name:
 *                        type: string
 *                        example: Samrat Yadav
 */

// =========== this is the api to fetch all the users from the database
userRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Fetched all users successfully",
    statusCode: 200,
    data: users,
  });
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Avinash"
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "user created successfully"
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "Avinash"
 */
userRouter.post("/", (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *       404:
 *         description: User not found
 */
userRouter.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
userRouter.delete("/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id, 10));
  if (index === -1) return res.status(404).json({ message: "User not found" });
  const deletedUser = users.splice(index, 1);
  res.status(200).json(deletedUser);
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Name
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
userRouter.put("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).json({ message: "User not found" });
  user.name = req.body.name;
  res.status(200).json(user);
});
module.exports = {
  userRouter,
};
