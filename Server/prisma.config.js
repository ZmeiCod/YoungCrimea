require("dotenv").config({ path: "../.env" });

const encodePassword = (password) => {
  return encodeURIComponent(password);
};

const DATABASE_URL = `postgresql://${
  process.env.POSTGRES_USER
}:${encodePassword(process.env.POSTGRES_PASSWORD)}@${
  process.env.POSTGRES_HOST
}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;

process.env.DATABASE_URL = DATABASE_URL;

module.exports = {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: DATABASE_URL,
  },
};
