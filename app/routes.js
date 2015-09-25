var home = require('../controllers/home'),
    users = require('../controllers/users');

module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/api/user', users.getUsers);
    app.post('/api/user', users.newUser);
    app.get('/api/user/:id', users.getUser);
    app.put('/api/user/:id', users.updateUser);

};
