const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign");

router.post("/create", async (req, res) => {
  const campaign = new Campaign(req.body);
  await campaign.save();
  res.json(campaign);
});

router.get("/user/:userId", async (req, res) => {
  const data = await Campaign.find({ userId: req.params.userId });
  res.json(data);
});

module.exports = router;
