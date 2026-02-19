require('dotenv').config({ path: '../.env' });

const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.APPLOCATION_PORT;

app.use(express.json());

app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'Сервер работает!' });
});

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Маршрут не найден'
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
