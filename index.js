import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./db.js";
import { registerValidation } from "./validations/auth.js";
import checkAuth from "./utils/checkAuth.js";
import * as userController from "./controllers/userController.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";

// Загрузка переменных окружения
dotenv.config();

connectDB();

const app = express();

// Логирование HTTP-запросов
app.use(morgan("dev"));

app.use(express.json());

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Что-то пошло не так. Пожалуйста, попробуйте еще раз позже.",
  });
});

// Определение маршрутов
app.post("/auth/login", handleValidationErrors, userController.login);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  userController.register
);
app.get("/auth/me", checkAuth, userController.getMe);

// Запуск сервера
const PORT = process.env.PORT || 4444;
app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is running on port ${PORT}`);
});
