const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    examType: { type: String, required: true },
    date: { type: Date, required: true },
    results: { type: Map, of: String, required: true },
    fileUrl: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);
