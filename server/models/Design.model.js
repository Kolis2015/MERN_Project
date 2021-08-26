const mongoose = require('mongoose');

const DesignSchema = mongoose.Schema({
    category:{
        type: String,
        required: [true, 'A Category is required'],
        enum: ["Shoes", "T-shirt", "Shirts", "Pants", "Dress"]
    },
    gender:{
        type: String,
        required: [true, 'A Gender is required'],
        enum: ["Female", "Male", "Unisex"]
    },
    season:{
        type: String,
        required: [true, 'A Season is required'],
        emum:["Winter", "Spring", "Summer", "Fall"]
    },
    dressCode:{
        type: String,
        required: [true, 'A DressCode is required'],
        emum:["Formal", "Casual", "Athletic", "Occasional", "Other"]
    },
    designerName:{
        type: String,
        required:[true, 'A Name is required'],
        minLength:[4, 'A Name must be at least 4 characters long']
    },
    description:{
        type: String,
        required: [true, 'A Description is required'],
        minLength:[10, 'A Description must be at least 10 characters long']
    },
    designFileUploadID:{
        type: String,
        required: [true,'A Designfile is required'],
    },
    designImageUploadID:{
        type: String,
        required: [true,'A DesignImage is required'],
    },
    designThumbnailUploadID:{
        type: String,
        required: [true,'A DesignThumbnail is required'],
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }







},{ timestamps: true });

module.exports = mongoose.model('Design', DesignSchema);