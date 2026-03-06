const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");

const supportController = require("../controllers/support.controller");

router.post("/message", protect, supportController.sendMessage);

router.delete("/resolve/:id", protect, supportController.resolveTicket);

module.exports = router;