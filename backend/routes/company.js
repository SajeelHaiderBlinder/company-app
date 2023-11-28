const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../database/db");
const {
  registerCompany,
} = require("../controllers/auth/company/companyController");

router.post("/registerCompany", registerCompany);

module.exports = router;
