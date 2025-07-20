const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");

// DEFINE route /user/preferences
router.post("/preferences", userControllers.saveUserPreference);
router.get("/preferences", userControllers.getUserPreference);

module.exports = router;
