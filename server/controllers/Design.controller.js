const Design = require('../models/Design.model');
const jwt = require("jsonwebtoken");

module.exports.getAll = (req, res) => {
    console.log("inside get all");

    Design.find()
        .then((alldesign) => {
            console.log(alldesign);
            res.json(alldesign);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);

        })
};

module.exports.getByUserId = (req, res) => {
    console.log("inside get by user ID");
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true });

    console.log("decodedJwt = " + decodedJwt);

    const loggedInUser_id = decodedJwt.payload.user_id;

    Design.find({user_id: loggedInUser_id})
        .then((alldesign) => {
            console.log(alldesign);
            res.json(alldesign);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);

        })
};


module.exports.create = (req, res) => {
    console.log('inside create');
    console.log('req.body');
    console.log(req.files.designFile.name)
    console.log(req.files.designImage.name)
    console.log(req.files.designThumbnail.name)
    console.log(JSON.parse(req.files.designData.data))
    
    let newDesign = new Design(JSON.parse(req.files.designData.data))
    //add the designers user id to the new design object
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true });
    const user_id = decodedJwt.payload.user_id;
    newDesign.user_id = user_id;

    const designFile = req.files.designFile
    const designFileName = newDesign._id + "_" + designFile.name
    newDesign.designFileUploadID = designFileName
    const designImage = req.files.designImage
    const designImageName = newDesign._id + "_" + designImage.name
    newDesign.designImageUploadID = designImageName
    const designThumbnail = req.files.designThumbnail
    const designThumbnailName = newDesign._id + "_" + designThumbnail.name
    newDesign.designThumbnailUploadID = designThumbnailName



    console.log(newDesign)
    designFile.mv("./public/" + designFileName, function
        (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        //designImage.move
        //if there is an error return status 500
        designImage.mv("./public/" + designImageName, function
            (err) {
            if (err) {
                console.log(err)
                return res.status(500).send({ msg: "Error occured" });
            }
            //else we cans ay designThumbnail.move
            //if there is an error return status 500
            designThumbnail.mv("./public/" + designThumbnailName, function
                (err) {
                if (err) {
                    console.log(err)
                    return res.status(500).send({ msg: "Error occured" });
                }
                
                
                // console.log(newDesign
                
                //else design.create and add to mongoDB
                newDesign.save()
                    .then((savedDesign) => {
                        console.log("saved Design Successful")
                        console.log(savedDesign)
                        res.json({ status: "It's all good !" })
                    })
                    .catch((err) => {
                        console.log(err)
                        res.status(500).json(err)
                })
                
            })
        })
    });

};
    // validateDesign(req.body);
    // Pet.create(req.body)
    //     .then((newDesign) => {
    //         console.log(newDesign);
    //         res.json(newDesign);


    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         res.status(400).json(err);

    //     })

module.exports.getOne = (req, res) => {
    console.log('inside getOne');
    console.log('looking for id:' + req.params.id);


    Design.findById(req.params.id)
        .then((oneDesign) => {
            console.log(oneDesign);
            res.json(oneDesign);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);

        })



};

module.exports.update = (req, res) => {
    console.log('inside update');
    console.log('looking for id:' + req.params.id);
    console.log(req.body);

    validateDesign(req.body);


    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    
        .then((updatedDesign) => {
            console.log(updatedDesign);
            res.json(updatedDesign);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
};


module.exports.delete = (req, res) => {
    console.log('inside delete');
    console.log('looking for id: ' + req.params.id);


    Design.findByIdAndDelete(req.params.id)
        .then((deletedDesign) => {
            console.log(deletedDesign);
            res.json(deletedDesign);

        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
}

validateDesign = (Design) => {

};