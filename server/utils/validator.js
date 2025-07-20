function hasExpired(signalTimestamp, ttlInSeconds) {
  const now = Date.now();
  const signalTime = new Date(signalTimestamp).getTime();
  return now - signalTime > ttlInSeconds * 1000;
}

module.exports = { hasExpired };
