const passport = require("passport");
const router = require("express").Router();
const { registerValidation, loginValidation } = require("../validators/auth");
const {
  validationMiddleware,
} = require("../middleware/validations-middleware");
const {
  registerStudent,
  loginStudent,
  protected,
  logoutStudent,
  getUsers,
} = require("../controllers/auth/userController");
const { userAuth } = require("../middleware/auth-middleware");

//login with google
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully logged in",
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: "Not authorized",
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/userdashboard/dashboard",
    failureRedirect: "/login/failed",
  })
);

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
});

//student signup
router.post(
  "/registerstudent",
  registerValidation,
  validationMiddleware,
  registerStudent
);

//protected route
router.get("/protected", userAuth, protected);

//login student
router.post(
  "/loginstudent",
  loginValidation,
  validationMiddleware,
  loginStudent
);

//logout student
router.get("/logoutstudent", userAuth, logoutStudent);

//get all users
router.get("/getUsers", getUsers);

module.exports = router;
