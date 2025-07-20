// IMPORT required express middlewares, routes, config, logger
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");
const logger = require("./config/logger");

const healthRoutes = require("./routes/healthRoutes");
const signalRoutes = require("./routes/signalRoutes");
const userRoutes = require("./routes/userRoutes");

// INITIALIZE express app
const app = express();

// LOAD environment variables
dotenv.config();

// APPLY middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// SETUP API routes
app.use("/api/health", healthRoutes);
app.use("/api/signals", signalRoutes);
app.use("/api/users", userRoutes);

// CONNECT to database using db.js
connectDB()
  .then(() => {
    // START server on configured PORT
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      logger.info(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error("❌ Failed to connect to database:", err);
    process.exit(1);
  });
