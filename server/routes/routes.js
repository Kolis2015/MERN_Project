const UserController = require('../controllers/User.controller');
const DesignController = require('../controllers/Design.controller');
const ImageController = require('../controllers/Image.controller');

module.exports = (app) => {
    app.post('/api/User', UserController.create);
    app.post('/api/User/login', UserController.login);
    app.post('/api/User/logout', UserController.logout);
    app.post('/api/User/isLoggedIn', UserController.isLoggedIn);
    app.get('/api/Design', DesignController.getAll);
    app.post('/api/Design', DesignController.create);
    app.get('/api/Design/:id', DesignController.getOne);
    app.put('/api/Design/:id', DesignController.update);
    app.delete('/api/Design/:id', DesignController.delete);
    app.post('/api/Image', ImageController.create); 
    app.get('/api/Image/:id', ImageController.getOne);
    app.get('/api/User/Designs',UserController.getdesigns)

}