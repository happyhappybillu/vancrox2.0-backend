const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

router.get("/pending", adminController.pending);

module.exports = router;