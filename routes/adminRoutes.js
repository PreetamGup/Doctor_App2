const express = require('express');
const { getALLUsersController, getAllDoctorsController, changeAccountStatusController } = require('../controllers/adminController');

const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')



// Get _ Users
router.get('/getAllUsers', authMiddleware,getALLUsersController);

// Get -Doctors
router.get('/getAllDoctors', authMiddleware,getAllDoctorsController);

// Post Account Status
router.post('/changeAccountStatus' , authMiddleware, changeAccountStatusController)
module.exports = router;