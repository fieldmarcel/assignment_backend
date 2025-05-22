
import express from "express";
const router= express.Router();
import login from "../controllers/authController.js";
import {authenticateToken} from "../middlewares/auth_middleware.js";
import taskController from "../controllers/taskController.js";

router.get("/login",login);
router.get("/",authenticateToken,taskController.getAllTasks);
router.get("/:id",authenticateToken,taskController.getTaskbyId);    
router.post("/",authenticateToken,taskController.createTask);
router.put("/:id",authenticateToken,taskController.updateTask);
router.delete("/:id",authenticateToken,taskController.deleteTask);
export default router;
