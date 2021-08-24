const { v4: uuidv4 } = require('uuid');

// @desc    Home page
// @route   GET /
exports.get_home = (req, res) => {
    res.status(200).render('home/home')
}

// @desc    Create a room
// @route   GET /create-room
exports.get_createRoom = (req, res) => {
    res.status(200).redirect(`/room/${uuidv4()}`)
}