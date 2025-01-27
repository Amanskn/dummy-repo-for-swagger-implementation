const { Router } = require("express");

const userRouter = Router();

// Dummy database
const users = [
  { id: 1, name: "Aman Maddhesia" },
  { id: 2, name: "Sandeep Tiwari" },
  { id: 3, name: "Birendra Mahto" },
];

// Routes

// =========== this is the api to fetch all the users from the database
userRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Fetched all users successfully",
    statusCode: 200,
    data: users,
  });
});

userRouter.post("/", (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

userRouter.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
});

userRouter.delete("/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id, 10));
  if (index === -1) return res.status(404).json({ message: "User not found" });
  const deletedUser = users.splice(index, 1);
  res.status(200).json(deletedUser);
});

userRouter.put("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).json({ message: "User not found" });
  user.name = req.body.name;
  res.status(200).json(user);
});
module.exports = {
  userRouter,
};
