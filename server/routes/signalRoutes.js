const express = require("express");
const router = express.Router();

const signalControllers = require("../controllers/signalControllers");

// DEFINE route /signals
router.post("/", signalControllers.createSignal);
router.get("/", signalControllers.getAllSignals);
router.delete("/:id", signalControllers.deleteSignalById);

module.exports = router;
