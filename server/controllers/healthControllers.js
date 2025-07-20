exports.checkServerStatus = (req, res) => {
  res.status(200).json({ message: "Server healthy" });
};
