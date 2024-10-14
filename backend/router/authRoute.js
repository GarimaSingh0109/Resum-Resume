const express = require("express");
const authRouter = express.Router();
const jwtAuth = require("../middleware/jwtAuth.js");
const rateLimit = require("express-rate-limit");

const {
  signUp,
  signIn,
  forgotPassword,
  resetPassword,
  getUser,
  logout
} = require("../controller/authController.js");

// Define a rate limiter for auth routes (e.g., signup and signin)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: "Too many requests, please try again after 15 minutes"
  },
  headers: true // Optional: send rate limit info in headers
});

authRouter.post("/signup", authLimiter, signUp);
authRouter.post("/signin", authLimiter, signIn);

authRouter.get("/user", jwtAuth, getUser);
authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
