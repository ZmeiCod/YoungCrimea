const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API работает!');
});

const PORT = process.env.APPLOCATION_PORT;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
