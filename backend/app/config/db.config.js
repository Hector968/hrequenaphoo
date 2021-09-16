module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Leunameluy100$",
  DB: "example",
  dialect: "mysql",
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};