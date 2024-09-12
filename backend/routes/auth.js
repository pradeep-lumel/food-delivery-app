const express = require('express');
const { registerUser,getUser, getAllUsers, loginUser, updateUser, deleteUser } = require('../controllers/authcontroller');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/all-users').get(getAllUsers)
router.route('/:id').get(getUser);
router.route('/login').post(loginUser)
router.route('/update').post(updateUser)
router.route('/delete').post(deleteUser)

module.exports = router; 