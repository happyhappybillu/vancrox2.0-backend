const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

const { protect } = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.get(
"/pending",
protect,
role("admin"),
adminController.pending
);

module.exports = router;