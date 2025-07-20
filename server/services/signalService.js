const signalStore = require("../store/signalStore");

const saveSignal = (signalData) => {
  return signalStore.save(signalData);
};

const fetchAll = () => {
  return signalStore.getAll();
};

const deleteSignal = (id) => {
  return signalStore.deleteById(id);
};

module.exports = {
  saveSignal,
  fetchAll,
  deleteSignal,
};
