const Register = require('../models/register');
// status-helper
const responseStatus = require('../helpers/status');

// user-login
const userRegister = async (req, res) => {
    try {
        const newUser = await new Register(req.body).save();
        res.status(201).json(
            responseStatus(true, 'created', "User", newUser)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `${error}`)
        )
    }
}

module.exports = { userRegister };
