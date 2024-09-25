const express = require('express');
const { registerUser,getUser, getAllUsers, loginUser, updateUser, deleteUser, deleteAllUser } = require('../controllers/authcontroller');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/all-users').get(getAllUsers)
router.route('/:id').get(getUser);
router.route('/login').post(loginUser)
router.route('/update/:id').put(updateUser)
router.route('/delete/all-users').delete(deleteAllUser)
router.route('/delete/:id').delete(deleteUser)

module.exports = router; 