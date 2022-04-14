const express = require("express");
const handleValidation = require("../../../middleware/handleValidation");
const isAuthorized = require("../../../middleware/isAuthorized");
const { CREATE_STATUS } = require("../endPoints");
const { createStat } = require("../joi/status.validation");

const router = express.Router();


//create status task3
const create_status = require("../controller/createStatus.controller");
router.post("/api/status",handleValidation(createStat),isAuthorized(CREATE_STATUS),create_status)
//end

module.exports = router;
