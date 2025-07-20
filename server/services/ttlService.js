const ttlHelper = require("../utils/ttlHelper");
const signalStore = require("../store/signalStore");

const isSignalExpired = (signal) => {
  return ttlHelper.isExpired(signal.timestamp);
};

const cleanupExpiredSignals = () => {
  const allSignals = signalStore.getAll();
  const activeSignals = allSignals.filter((signal) => !isSignalExpired(signal));
  signalStore.overwrite(activeSignals);
};

module.exports = {
  isSignalExpired,
  cleanupExpiredSignals,
};
