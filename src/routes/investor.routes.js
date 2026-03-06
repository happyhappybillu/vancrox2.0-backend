const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");
const allowRoles = require("../middleware/role.middleware");

const investorController = require("../controllers/investor.controller");

router.get("/dashboard", protect, allowRoles("investor"), investorController.dashboard);

module.exports = router;