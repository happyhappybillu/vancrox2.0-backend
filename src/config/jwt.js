const jwt = require("jsonwebtoken");

/**
 * Generate JWT Token
 * @param {Object} payload
 * @returns {String} token
 */
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

/**
 * Verify JWT Token
 * @param {String} token
 * @returns {Object} decoded payload
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};