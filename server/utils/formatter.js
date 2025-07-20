function formatSignalOutput(signal) {
  return `Signal: ${signal.type.toUpperCase()} ${signal.symbol} | Confidence: ${signal.confidenceLevel}% | Trade Type: ${signal.tradeType} | Risk/Reward: ${signal.riskToReward}`;
}

module.exports = { formatSignalOutput };
