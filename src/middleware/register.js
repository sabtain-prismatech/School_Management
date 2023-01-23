const Register = require('../models/register');
// status-helper
const responseStatus = require('../helpers/status');


const middleRegister = async (req, res, next) => {
    try {
        const { email, password, confirmPassword } = req.body;
        const findEmail = await Register.findOne({ email });
        if (findEmail) {
            res.status(409).json(
                responseStatus(false, 'conflict', "Email already exist.")
            )
        } else if (password !== confirmPassword) {
            res.status(409).json(
                responseStatus(false, 'conflict', "Password and confirm password must be same.")
            )
        } else {
            next();
        }
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `${error}`)
        )
    }
}


module.exports = { middleRegister };