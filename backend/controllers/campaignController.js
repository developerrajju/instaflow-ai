const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const Campaign = require("../models/Campaign");

// CREATE campaign (protected)
router.post("/create", auth, async (req, res) => {
  try {
    const campaign = new Campaign({
      userId: req.user,
      triggerWord: req.body.triggerWord,
      message: req.body.message,
    });

    await campaign.save();
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET campaigns (protected)
router.get("/user", auth, async (req, res) => {
  try {
    const campaigns = await Campaign.find({ userId: req.user });
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
