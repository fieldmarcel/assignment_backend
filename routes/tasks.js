
import express from "express";
const router= express.Router();


import taskController from "../controllers/taskController.js";


router.get("/",taskController.getAllTasks);
router.get("/:id",taskController.getTaskbyId);    
router.post("/",taskController.createTask);
router.put("/:id",taskController.updateTask);
router.delete("/:id",taskController.deleteTask);
export default router;
