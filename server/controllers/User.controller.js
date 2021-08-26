const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "pepper";

module.exports.create = (req, res) => {
    console.log('inside create');
    console.log(req.body);
    User.create(req.body)
        .then((newUser) => {
            console.log(newUser);
            res.json(newUser);




        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
};

module.exports.login = (req, res) => {
    console.log("inside login");
    console.log(req.body);

    User.findOne({ UserName: req.body.UserName })
        .then((userRecord) => {
            if (userRecord === null) {
                res.status(400).json({ message: "Username not found. Would you like to sign up?" });

            } else {
                bcrypt.compare(req.body.Password, userRecord.Password)
                    .then((isPasswordValid) => {
                        if (isPasswordValid) {
                            console.log("password is valid");
                            console.log(userRecord);
                            console.log(secret);
                            res.cookie("usertoken",
                                jwt.sign({
                                    user_id: userRecord._id,
                                    userName: userRecord.UserName
                                },
                                    secret),
                                {
                                    httpOnly: false,
                                    expires: new Date(Date.now() + 90000000)
                                }
                            )
                                .json({
                                    message: "Successfully logged in",
                                    userLoggedIn: userRecord.UserName
                                })
                        } else {
                            res.status(400).json({ message: "Incorrect password" });


                        }

                    }
                    )
                    .catch((err) => {
                        console.log("error with compare pws:" + err)
                        res.status(400).json({ message: "Invalid Login Attempt" });


                    })
            }
        })
        .catch((err) => {
            console.log("error with find one")
            res.status(400).json({ message: "Invalid Login Attempt" });
        })
};

module.exports.logout = (req, res) => {
    console.log("logging out!");
    res.clearCookie('usertoken');
    res.json({
        message: "You have successfully logged out",
    })
}


module.exports.isLoggedIn = (req, res) => {
    console.log("is user logged in?");
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    console.log(decodedJWT);
    if (decodedJWT) {
        res.json(true);

    } else {
        res.json(false);
    }
}


module.exports.getdesigns = (req, res) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true });
    const user_id = decodedJwt.payload.user_id;
    User.findByIdAndUpdate(user_id, {
        $pull: { UserDesigns: req.params.id },
    },
        {new:true, useFindAndModify:false}
    )
        .populate("UserDesigns", "-__v")
        .then((updatedUser) => {
            console.log(updatedUser)
            res.json(updatedUser)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
}

