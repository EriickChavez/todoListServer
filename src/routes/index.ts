import express, { Request, Response } from "express";
import { ToDosMocks } from "../mocks";

const router = express.Router();

// http://localhost:3000/
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    data: ToDosMocks.todos.map((item) => {
      const createdAt = new Date().toDateString();
      return {
        ...item,
        createdAt: `${createdAt}`,
      };
    }),
  });
});

// http://localhost:3000/update
router.post("/update", (req: Request, res: Response) => {
  const { newTodo, id } = req.body.newTodo;
  const itemIndex = ToDosMocks.todos.findIndex((item) => item.id === id);

  ToDosMocks[itemIndex] = newTodo;

  const jsonResponse = {
    ok: true,
    todo: newTodo,
  };

  res.status(200).json(jsonResponse);
});

// http://localhost:3000/?userId=1
router.get("/:userId", (req, res) => {
  let id = req.params.userId;
  let body = req.body;

  res.status(200).json({
    ok: true,
    data: { todos: ToDosMocks.todos.filter((item) => item.userId === id) },
  });
});
export default router;
