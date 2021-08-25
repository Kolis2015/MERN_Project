const Design = require('../models/Design.model');

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

module.exports.create = (req, res) => {
    console.log('inside create');
    console.log('req.body');
    validateDesign(req.body);
    Design.create(req.body)
        .then((newDesign) => {
            console.log(newDesign);
            res.json(newDesign);


        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);

        })
};

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

   // validateDesign(req.body);


    Design.findOneAndUpdate({_id: req.params.id}, req.body, {
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

//validateDesign = (Design) => {

//};