const bcrypt = require("bcryptjs");
const pool = require("../../../database/db");
const { sign } = require("jsonwebtoken");
const db = require("../../../database/db");

exports.registerCompany = async (req, res) => {
  const {
    email,
    password,
    ntnNumber,
    foundersName,
    companysName,
    linkedinUrl,
    companysWebsite,
    noOfEmployees,
    noOfOffices,
  } = req.body;
  // Hash the user's password
  //const saltRounds = 10;
  //const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    console.log(req.body);
    const companyQuery = `
        INSERT INTO company (
          email, password, company_name, created_at
        ) VALUES ($1, $2, $3, NOW())
        RETURNING company_id
      `;
    const companyValues = [
      email || " ",
      password, // Use the hashed password
      companysName,
    ];

    const companyResult = await pool.query(companyQuery, companyValues);
    const companyId = companyResult.rows[0].company_id;

    const detailsQuery = `
        INSERT INTO company_details (
          company_id, ntn, founder_name, linkedin_url, website_url,
          no_of_employees, no_of_offices
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;
    const detailsValues = [
      companyId,
      ntnNumber,
      foundersName,
      linkedinUrl,
      companysWebsite,
      noOfEmployees,
      noOfOffices,
    ];

    await pool.query(detailsQuery, detailsValues);

    return res.status(201).json({
      success: true,
      message: "Company registered successfully.",
      id: companyId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.loginStudent = async (req, res) => {
  let user = req.user;
  let payload = {
    id: user.user_id,
    email: user.email,
  };

  try {
    const token = await sign(payload, SECRET);

    return (
      res.status(200).cookie("token", token),
      { httpOnly: true }.json({
        success: true,
        message: "Logged in Successfully",
      })
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.logoutStudent = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out succefully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    console.error(error);
  }
};
