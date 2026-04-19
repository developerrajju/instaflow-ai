const Campaign = require("../models/Campaign");

exports.createCampaign = async (req, res) => {
  const campaign = new Campaign(req.body);
  await campaign.save();
  res.json(campaign);
};

exports.getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find({ userId: req.params.userId });
  res.json(campaigns);
};
