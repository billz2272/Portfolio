const express = require('express');
const router = express.Router()
const {
    registerUser,
    getAllUsers,
    loginUser
} = require('../controllers/userControllers')

router.route("/").post(registerUser).get(getAllUsers)
router.post("/login", loginUser)

module.exports = router 