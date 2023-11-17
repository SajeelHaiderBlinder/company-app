const bcrypt = require("bcryptjs");
const pool = require("../../database/db");
const { sign } = require("jsonwebtoken");
const db = require("../../database/db");

exports.getUsers = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM users");
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.registerStudent = async (req, res) => {
  const {
    user_id,
    email,
    password,
    first_name,
    last_name,
    created_at,
    university,
    degree,
    semester,
    manager,
    community_id,
  } = req.body;

  // Hash the user's password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    const query =
      "INSERT INTO users (user_id, email, hashedPassword, first_name, last_name, created_at, university, degree, semester, manager, community_id) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11)";
    const values = [
      user_id,
      email,
      hashedPassword,
      first_name,
      last_name,
      created_at,
      university,
      degree,
      semester,
      manager,
      community_id,
    ];
    await pool.query(query, values);
    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
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
