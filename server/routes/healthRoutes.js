const express = require("express");
const router = express.Router();

const healthControllers = require("../controllers/healthControllers");

// DEFINE route /health
router.get("/", healthControllers.checkServerStatus);

module.exports = router;
