const express = require("express");
const handleValidation = require("../../../middleware/handleValidation");
const { createUser, siginUser } = require("../joi/user.validation");

const router = express.Router();

//task 1
const userRegisteration = require("../controller/signUp.controller");
const upload = require("../../../middleware/multer");
router.post("/api/signup",upload.array('image',5),handleValidation(createUser),userRegisteration)
//end

//task 2
const login = require("../controller/signInUser.controller");
router.post("/api/signin",handleValidation(siginUser),login)
//end



module.exports = router;
