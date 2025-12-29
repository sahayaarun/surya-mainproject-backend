const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: String,
    qualification: String,
    salary: Number,
    location: String,
    status: { type: String, default: 'pending' } 
});

module.exports = mongoose.model('Job', jobSchema);