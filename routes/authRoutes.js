const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    //send user to dashboard after successfully authenticating with google
    (req, res) => {
      res.redirect("/meetings");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
  //someone who has already logged in can get access to their user
  app.get("/api/current_user", (req, res) => {
    // console.log(req);
    res.send(req.user);
  });
};
