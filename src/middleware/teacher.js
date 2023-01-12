const Teacher = require('../models/teacher');
// status-helper
const responseStatus = require('../helpers/status');

const middleAddTeacher = async (req, res, next) => {
    try {
        const { email } = req.body;
        const findEmail = await Teacher.findOne({ email });
        console.log(findEmail);
        if (findEmail) {
            res.status(409).json(
                responseStatus(false, 'conflict', "Email already exist.")
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


module.exports = { middleAddTeacher };