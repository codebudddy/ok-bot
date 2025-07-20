const fs = require("fs");
const path = require("path");

const PREF_PATH = path.join(__dirname, "../store/preferenceStore.json");

const savePreferences = (userId, data) => {
  const preferences = getAllPreferences();
  preferences[userId] = data;

  fs.writeFileSync(PREF_PATH, JSON.stringify(preferences, null, 2));
  return { success: true };
};

const getPreferences = (userId) => {
  const preferences = getAllPreferences();
  return preferences[userId] || null;
};

const getAllPreferences = () => {
  if (!fs.existsSync(PREF_PATH)) return {};
  const content = fs.readFileSync(PREF_PATH, "utf-8");
  return content ? JSON.parse(content) : {};
};

module.exports = {
  savePreferences,
  getPreferences,
};
