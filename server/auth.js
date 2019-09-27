const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()
const privateKey = process.env.KEY;

const Auth = ({ id }) => jwt.sign({id}, privateKey, {expiresIn: '2h'});

module.exports = Auth;