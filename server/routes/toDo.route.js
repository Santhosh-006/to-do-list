import express from "express";
import {
  TodoCreateData,
  TodoGetRequest,
  TodoUpdate,
} from "../controllers/toDo.controlller.js";
const router = express.Router();

router.get("/", TodoGetRequest);

// Create entries in DB

router.post("/", TodoCreateData);

// Update working status of todos

router.put("/:id", TodoUpdate);

export default router;
