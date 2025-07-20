const signalService = require("../services/signalService");

exports.createSignal = async (req, res) => {
  try {
    const { symbol, type, entry, stopLoss, takeProfit } = req.body;

    if (!symbol || !type || !entry) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const signal = await signalService.saveSignal({
      symbol,
      type,
      entry,
      stopLoss,
      takeProfit,
    });
    res.status(201).json(signal);
  } catch (err) {
    res.status(500).json({ error: "Failed to create signal" });
  }
};

exports.getAllSignals = async (req, res) => {
  try {
    const signals = await signalService.fetchAll();
    res.status(200).json(signals);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch signals" });
  }
};

exports.deleteSignalById = async (req, res) => {
  try {
    const { id } = req.params;
    await signalService.deleteSignal(id);
    res.status(200).json({ message: "Signal deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete signal" });
  }
};
