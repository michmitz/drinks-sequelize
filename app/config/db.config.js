module.exports = {
  HOST: "localhost",
  USER: "MSte",
  PASSWORD: "123",
  DB: "drinks",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
