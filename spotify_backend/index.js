const express = require("express");
const app = express();
require("dotenv").config();
const port = 8000;

const mongoose = require("mongoose");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");

app.use(express.json());
app.use(passport.initialize());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://jangidkumarjay:Jaykumar%402004@cluster0.z50shwk.mongodb.net")
  .then(() => console.log("Database Connection established"))
  .catch((err) => console.log("Error connecting to database", err));

// JWT Strategy
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "secret",
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.sub); // ✅ async/await, use `sub`
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("hello there this is a backend project");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist",playlistRoutes)

app.listen(port, () => {
  console.log("App is listening on port: " + port);
});
