const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoxerSchema = new Schema({
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

var ImageSchema = new Schema({
    fileName: String,
    url: String,
    contentType: String,
    size: String,
    dimensions: String
  });
module.exports = mongoose.model('Boxer', BoxerSchema);