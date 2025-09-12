import express from "express";
import {
  TodoCreateData,
  TodoGetRequest,
} from "../controllers/toDo.controlller.js";
const router = express.Router();

router.get("/", TodoGetRequest);

// Create entries in DB

router.post("/", TodoCreateData);

export default router;
