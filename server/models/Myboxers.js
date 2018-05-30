const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const MyboxerSchema = new Schema({
    useremail: String,
    globalId: String,
    name: String,
    bouts: String,
    rounds: String,
    residence: String,
    nationality: String,
    knockoutPercentage: String,
    stance: String,
    weightDivision: String,
    height: String,
    birthPlace: String,
    dob: String,
    wins: String,
    winsKO: String,
    draws: String,
    losses: String,
    lossesKO: String,
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Myboxers', MyboxerSchema);