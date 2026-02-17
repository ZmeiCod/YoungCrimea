const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Маршруты (заглушки)
app.get('/', (req, res) => {
  res.send('API работает!');
});

// Порт из переменных окружения или 3000 по умолчанию
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
