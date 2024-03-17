import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './db.js';
import routes from './routes.js';

// Загрузка переменных окружения
dotenv.config();

connectDB();

const app = express();

// Логирование HTTP-запросов
app.use(morgan('dev'));

app.use(express.json());

// Подключаем роутер
app.use('/', routes);

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз позже.'
  });
});

// Запуск сервера
const PORT = process.env.PORT || 4444;
app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server is running on port ${PORT}`);
});
