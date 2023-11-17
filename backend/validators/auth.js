const { check } = require("express-validator");
const db = require("../database/db");
const { compare } = require("bcryptjs");

const password = check("password")
  .isLength({ min: 8, max: 25 })
  .withMessage("Password has to be between 8 and 25 characters");

const email = check("email")
  .isEmail()
  .withMessage("Please provide a valid email");

const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query("SELECT * FROM users WHERE email=$1", [
    value,
  ]);

  if (rows.length) {
    throw new Error("Email already exists");
  }
});

const loginFieldsCheck = check("email").custom(async (value, { req }) => {
  const user = await db.query("SELECT * FROM users WHERE email=$1", [value]);

  if (!user.rows.length) {
    throw new Error("Email does not exists");
  }

  const validPassword = await compare(req.body.password, user.rows[0].password);
  if (!validPassword) {
    throw new Error("Invalid Password");
  }

  req.user = user.rows[0];
});

module.exports = {
  registerValidation: [email, password, emailExists],
  loginValidation: [loginFieldsCheck],
};
