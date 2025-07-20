const createUserPreference = ({
  id,
  preferredCoins = [],
  preferredRisk = "medium", // "low", "medium", "high"
  notificationSettings = {
    email: false,
    sms: false,
    push: true,
  },
  tradeTypes = ["scalp", "swing"], // allowed trade types
  riskToRewardRange = [1.5, 3.0], // min and max acceptable R:R
  confidenceThreshold = 0.7, // minimum confidence required
}) => {
  return {
    id, // user ID or session ID
    preferredCoins, // e.g., ["BTC", "ETH"]
    preferredRisk, // for signal filtering or UX display
    notificationSettings, // preferences for how to notify
    tradeTypes, // e.g., ["scalp"], ["swing"], or both
    riskToRewardRange, // range for acceptable R:R
    confidenceThreshold, // minimum acceptable confidence
  };
};

module.exports = {
  createUserPreference,
};
