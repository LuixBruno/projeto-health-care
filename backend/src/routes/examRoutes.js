const protect = require('../middleware/authMiddleware');
const express = require('express');
const { createExam, getExams } = require('../controllers/examController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, createExam).get(protect, getExams);

module.exports = router;
