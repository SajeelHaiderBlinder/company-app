const express = require("express");
const router = express.Router();
const db = require("../database/db"); // Adjust the path based on your project structure

router.get("/getAllCommunities", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM communities");
    const communities = data.rows;

    res.json({ communities });
  } catch (error) {
    console.error("Error fetching communities:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
