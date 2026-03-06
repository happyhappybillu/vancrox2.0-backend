const express = require("express");
const router = express.Router();

const updateController = require("../controllers/update.controller");

router.post("/create", updateController.createUpdate);

module.exports = router;