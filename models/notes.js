const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    date: {
        type: Date,
        default: Date.now  
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('Note', notesSchema);