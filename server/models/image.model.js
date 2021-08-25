const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    Name:{
        type: String,
        default: 'none',
        required: true
    },
    Data:{
        type: String,
        required: true
    },
},{ timestamps: true });

module.exports = mongoose.model('Image', ImageSchema);