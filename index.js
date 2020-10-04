const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

const passport = require("passport");

require("./models/user");
require("./services/passport");
require("./routes/authRoutes")(app);
mongoose.connect(keys.mongoURI);
const app = express();

app.use(
  cookieSession({
    //cookie lasts 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passpo.initialize());
app.use(passport.session());
const PORT = process.env.PORT || 5000;

app.listen(PORT);
