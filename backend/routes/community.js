const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.get("/getAllCommunities", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM community");
    const communities = data.rows;

    res.json({ communities });
  } catch (error) {
    console.error("Error fetching communities:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
