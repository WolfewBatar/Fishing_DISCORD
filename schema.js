const mongoose = require('mongoose');

const VotreSchema = new mongoose.Schema({
    id: Number,
    email: String,
    password: String,
    date: Date,
    ip: String,
});



module.exports = mongoose.model('VotreModele', VotreSchema,'users');