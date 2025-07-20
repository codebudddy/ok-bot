const userService = require("../services/userService");

exports.saveUserPreference = async (req, res) => {
  try {
    const { userId, preferences } = req.body;

    if (!userId || !preferences) {
      return res.status(400).json({ error: "Missing userId or preferences" });
    }

    const saved = await userService.savePreferences(userId, preferences);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to save preferences" });
  }
};

exports.getUserPreference = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "Missing userId" });
    }

    const prefs = await userService.getPreferences(userId);

    if (!prefs) {
      return res.status(404).json({ error: "Preferences not found" });
    }

    res.status(200).json(prefs);
  } catch (err) {
    res.status(500).json({ error: "Failed to get preferences" });
  }
};
