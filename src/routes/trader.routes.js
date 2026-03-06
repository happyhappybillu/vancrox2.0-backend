const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");
const allowRoles = require("../middleware/role.middleware");

const traderController = require("../controllers/trader.controller");

router.get("/dashboard", protect, allowRoles("trader"), traderController.dashboard);

module.exports = router;