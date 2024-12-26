import express from "express";
import { create, getUserById } from "../controller/userController.js";
import { getAllUsers } from "../controller/userController.js";

const router = express.Router();

router.post("/user", create);
router.get("/users", getAllUsers);
router.get("/user/:id",getUserById);

export default router;