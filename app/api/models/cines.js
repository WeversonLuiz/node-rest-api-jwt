const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CineSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }
});
module.exports = mongoose.model('Cine', CineSchema)