const express = require("express");
require("./services/passport");
const mongoose = requir("mongoose");
mongoose.connect(keys.mongoURI);
const app = express();

require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT);
