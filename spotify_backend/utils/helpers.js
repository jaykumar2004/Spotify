const jwt = require("jsonwebtoken");

const getToken = async (email, user) => {
  const token = jwt.sign(
    { sub: user._id }, // ✅ use "sub" to match passport JWT strategy
    process.env.JWT_SECRET || "secret", // use env var if available
    { expiresIn: "7d" } // optional: adds token expiry
  );
  return token;
};

module.exports = { getToken };
