const Image = require('../models/Image.model');

module.exports.create = (req, res) => {
    console.log('inside create');
    console.log('req.body');
    validateImage(req.body);
    Image.create(req.body)
        .then((newImage) => {
            console.log(newImage);
            res.json(newImage);


        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);

        })
    };

    module.exports.getOne = (req, res) => {
        console.log('inside getOne');
        console.log('looking for id:' + req.params.id);
    
    
        Image.findById(req.params.id)
            .then((oneImage) => {
                console.log(oneImage);
                res.json(oneImage);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
    
            })
    
    
    
    };