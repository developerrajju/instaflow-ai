const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  userId: String,
  triggerWord: String,
  message: String,
});

module.exports = mongoose.model("Campaign", CampaignSchema);
