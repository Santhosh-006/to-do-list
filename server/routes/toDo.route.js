import express from "express";
import {
  TodoCreateData,
  TodoDelete,
  TodoGetRequest,
  TodoUpdate,
} from "../controllers/toDo.controlller.js";
const router = express.Router();

router.get("/", TodoGetRequest);

// Create entries in DB

router.post("/", TodoCreateData);

// Update working status of todos

router.put("/:id", TodoUpdate);

// Deleting a todo by title

router.delete("/:id", TodoDelete);

export default router;
