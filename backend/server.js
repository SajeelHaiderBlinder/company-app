require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const communityRoute = require("./routes/community");
const db = require("./database/db");
const { PORT, CLIENT_URL } = require("./constants");
const app = express();

app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
// app.use("/api", )
app.use("/api/community", communityRoute);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT} ...`));
