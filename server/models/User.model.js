const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    UserName: {
        type: String,
        required: [true, 'A UserName is required'],
        minLength: [4, " A UserName must be at least 4 characters long "]
    },
    Password: {
        type: String,
        required: [true, 'A Password is required'],
        minLength: [5, "A Password must be at least 5 characters long"]
    },
})

UserSchema.pre("save", function (next) {

    console.log("inside pre-save");

    bcrypt.hash(this.Password, 10)
        .then((hashedPassword) => {

            this.Password = hashedPassword;
            next();

        })
},{ timestamps: true });

module.exports = mongoose.model("User", UserSchema);