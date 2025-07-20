const createSignal = ({
  symbol,
  action, // "buy" or "sell"
  confidenceLevel,
  ttlSeconds,
  riskToReward, // numeric
  tradeType, // "scalp" or "swing"
}) => {
  const now = Date.now();

  return {
    id: generateId(), // unique signal ID
    symbol, // e.g., "BTC/USDT"
    action, // "buy" or "sell"
    confidenceLevel, // e.g., 0.85 or "high"
    riskToReward, // e.g., 2.5
    tradeType, // "scalp" or "swing"
    timestamp: now, // time of creation
    ttl: now + ttlSeconds * 1000, // expiration time in ms
  };
};

const generateId = () => {
  return Math.random().toString(36).substring(2, 10);
};

module.exports = {
  createSignal,
};
