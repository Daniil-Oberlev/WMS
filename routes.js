import express from "express";
import * as userController from "./controllers/userController.js";
import { registerValidation } from "./validations/auth.js";
import checkAuth from "./utils/checkAuth.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
import path from "path";

const router = express.Router();

// API роуты
router.post("/auth/login", handleValidationErrors, userController.login);
router.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  userController.register
);
router.get("/auth/me", checkAuth, userController.getMe);

// HTML роуты
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

router.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "user.html"));
});

router.get("/analytics", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "analytics.html"));
});

router.get("/pricing", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "pricing.html"));
});

router.get("/settings", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "settings.html"));
});

export default router;
