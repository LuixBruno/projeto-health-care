const Exam = require('../models/examModel');

exports.createExam = async (req, res) => {
    const { patientName, examType, date, results } = req.body;
    try {
        const exam = await Exam.create({
            patientName,
            examType,
            date,
            results,
            createdBy: req.user.id,
        });
        res.status(201).json(exam);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getExams = async (req, res) => {
    try {
        const exams = await Exam.find({ createdBy: req.user.id });
        res.json(exams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
