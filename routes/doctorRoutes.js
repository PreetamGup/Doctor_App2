const express = require("express");
const {
  getDocotorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController
} = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// POST DOCTOR INFO
router.post("/getDoctorInfo", authMiddleware, getDocotorInfoController);

// POST UPDATE DOCTOR PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

// POST GET SINGLE DOC INFO
router.post("/getDoctorByID", authMiddleware, getDoctorByIdController);

//GET Appointments
router.get("/doctor-appointments",authMiddleware,doctorAppointmentsController);

// UpdateStatus  POST 
router.post('/update-status',authMiddleware,updateStatusController)

module.exports = router;
