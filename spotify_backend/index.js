const express = require("express");
const app = express();
require("dotenv").config();
const port = 8000;
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User")

mongoose
  .connect(
    "mongodb+srv://jangidkumarjay:Jaykumar%402004@cluster0.z50shwk.mongodb.net"
  )
  .then((x) => {
    console.log("Database Connection established");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

//passport-jwt
  
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

app.get("/", (req, res) => {
  res.send("hello there this is a backend project");
});

app.listen(port, () => {
  console.log("App is listining on port : " + port);
});
