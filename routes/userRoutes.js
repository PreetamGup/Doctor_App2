const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
  getUserController
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

//  router Object
const router = express.Router();

// routes

// Login - POST
router.post("/login", loginController);

// Register - POST
router.post("/register", registerController);

// Authorization - POST
router.post("/getUserData", authMiddleware, authController);

// Apply Doctor - POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification - POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

// Delete Notification - DELETE
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

// GET All Docs
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

// Book Appointment
router.post("/book-appointment", authMiddleware, bookAppointmentController);

// Booking availability
router.post('/booking-availability',authMiddleware, bookingAvailabilityController);

// Appointments List
router.get('/user-appointments', authMiddleware, userAppointmentsController);

// Get User
router.get('/get-user',authMiddleware, getUserController)

module.exports = router;
