require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DATABASE_URI: process.env.DATABASE_URI || "mongodb://localhost:27017/okaybot",
  TTL_SECONDS: parseInt(process.env.TTL_SECONDS) || 600,
  API_KEYS: {
    EXAMPLE_API_KEY: process.env.EXAMPLE_API_KEY || "",
  },
};
