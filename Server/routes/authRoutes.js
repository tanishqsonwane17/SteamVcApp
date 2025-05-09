import express from "express";
import { signup, login } from "../controller/authController.js";

const router = express.Router();
router.post('/auth/register', signup);
router.post('/auth/login', login);


export default router;
