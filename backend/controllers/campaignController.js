const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Campaign = require("../models/Campaign");

// CREATE campaign (protected)
router.post("/create", auth, async (req, res) => {
const campaign = new Campaign({
userId: req.user,
triggerWord: req.body.triggerWord,
message: req.body.message,
});

await campaign.save();
res.json(campaign);
});

// GET campaigns (protected)
router.get("/user", auth, async (req, res) => {
const campaigns = await Campaign.find({ userId: req.user });
res.json(campaigns);
});

module.exports = router;
