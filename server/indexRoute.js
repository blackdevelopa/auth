const express = require('express')
const { createUser } = require('./loginController')

const router = express.Router()

router.post('/login', createUser)

module.exports = router;