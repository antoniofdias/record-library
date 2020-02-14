const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
    artist: String,
    title: String,
    price: Number,
    cover: String,
    description: String,
    quantity: Number
});

module.exports = mongoose.model('Record', RecordSchema);