const { Router } = require("express");
const { userRouter } = require("./userRouter");

const centralRouter = Router();

/**
 * @swagger
 * /health123aman:
 *   get:
 *     summary: Health Check
 *     description: Check if the API server is running
 *     responses:
 *       200:
 *         description: The server is up and running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: interger
 *                   example: OK
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   example: null
 */
centralRouter.get("/health", (req, res) => {
  res.status(200).json({
    message: "Health is ok, go ahead",
    statusCode: 200,
    data: null,
  });
});

centralRouter.use("/users", userRouter);

module.exports = {
  centralRouter,
};
