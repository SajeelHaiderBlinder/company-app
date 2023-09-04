const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1028725865095-v38qibabnvt9j9n70rej1oj1v9tgtcus.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:8080/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);
