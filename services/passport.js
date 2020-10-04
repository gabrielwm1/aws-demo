const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

//manage cookies in application

//represents a record inside the db
const User = mongoose.model("users");
//user.id is the property made by mongo for uniquely identiftying user. not google id property
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//search over collection, and when find a user, turn into model instance
//put it into cookie, and take it back out. passport manages auth by using cookies.
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => console.log(err));
});
//pulls the user model out of the model
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //console.log(existingUser);
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
