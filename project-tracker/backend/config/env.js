const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  appName: process.env.APP_NAME || "Bootcamp API",
};
