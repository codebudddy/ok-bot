const signals = []; // In-memory array

function addSignal(signal) {
  signals.push(signal);
}

function getAllSignals() {
  return signals;
}

function deleteSignalById(id) {
  const index = signals.findIndex((sig) => sig.id === id);
  if (index !== -1) {
    signals.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  addSignal,
  getAllSignals,
  deleteSignalById,
};
