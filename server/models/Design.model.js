const mongoose = require('mongoose');

const DesignSchema = mongoose.Schema({
    Category:{
        type: String,
        required: [true, 'A Category is required'],
        enum: ["Shoes", "Tshirt", "Shirts", "Pants", "Dress"]
    },
    Gender:{
        type: String,
        required: [true, 'A Gender is required'],
        enum: ["Female", "Male", "Unisex"]
    },
    Season:{
        type: String,
        //required: [true, 'A Season is required'],
        emu:["Winter", "Spring", "Summer", "Fall"]
    },
    DressCode:{
        type: String,
        //required: [true, 'A DressCode is required'],
        emu:["Formal", "Casual", "Athletic", "Occasional", "Other"]
    },
    Name:{
        type: String,
        required:[true, 'A Name is required'],
        minLength:[4, 'A Name must be at least 4 characters long']
    },
    Description:{
        type: String,
        required: [true, 'A Description is required'],
        minLength:[10, 'A Description must be at least 10 characters long']
    },
    DesignfileUploadID:{
        type: String,
        required: [true,'A Designfile is required'],
    },
    DesignImageUploadID:{
        type: String,
        required: [true,'A DesignImage is required'],
    },
    DesignThumbnailUploadID:{
        type: String,
        required: [true,'A DesignThumbnail is required'],
    },
    







},{ timestamps: true });

module.exports = mongoose.model('Design', DesignSchema);