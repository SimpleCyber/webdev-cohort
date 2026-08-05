import express from "express";
import cors from "cors";
import {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodoById,
  searchTodo,
} from "./routes/todo.js";
import { logger, signin, signup, me, verifyUser } from "./routes/auth.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(logger);

// auth
app.post("/signup", signup);
app.post("/signin", signin);

app.get("/me", me);

app.use(verifyUser);

// verify the user using the token

// Get all todos
app.get("/todos", getAllTodo);

// Add a new todo
app.post("/todos", createTodo);

// Update a todo
app.put("/todos/:id", updateTodo);

// Delete a todo
app.delete("/todos/:id", deleteTodoById);

// Search todos
app.get("/todos/search", searchTodo); // search route

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
