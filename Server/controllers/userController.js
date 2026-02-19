const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Функция для создания пользователя
exports.createTestUser = async (req, res) => {
  try {
    const userData = {
      email: 'test@example.com',
      name: 'Test User',
      passwordHash: '$2b$10$examplehashedpassword',
      role: 'USER'
    };

    const user = await prisma.user.create({
      data: userData
    });

    res.status(201).json({
      success: true,
      message: 'Тестовый пользователь создан',
      data: user
    });
  } catch (error) {
    console.error('Ошибка создания пользователя:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка сервера',
      error: error.message
    });
  } finally {
    await prisma.$disconnect();
  }
};
