const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const auth = require('./auth');
const User = require('./loginModel')

export function createUser(req, res) {
    const {password, username, email} = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        const password = hash
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            email,
            password
        })

        if(!user.username || !user.email || !user.password) {
            return res.status(400).send("Enter username, password and email")
        }
        // return User.count({
        //     $or: [
        //         {email: req.body.email}
        //     ],
        // })
        // .then(count => {
        //    (count > 0) {
        //         res.send({
        //             message: 'User exist'
        //         })
        //     }
            
            return user.save().then(newUser => {
                const Auth = auth(newUser)
                return res.json({
                    newUser,
                    Auth
                })
            }).catch(() => console.log("failed"))
        })
    // })
}

// module.exports = createUser;
export default createUser