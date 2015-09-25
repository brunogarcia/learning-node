var User = require('../app/users');

module.exports = {

    home: function(req, res) {
        res.json(200, { message: '¡Hola!' });
    },

    getUsers: function (req, res) {

        User.find(function(err, users) {
            if (err)
                res.send(500, {'status': 'ko'});

            res.json(200, users);
        });
    },

    getUser: function (req, res) {

        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(500, {'status': 'ko'});

            res.json(200, user);
        });
    },

    newUser: function (req, res) {

        var user = new User();

        user.email = req.body.email;

        user.save(function(err) {
            if (err)
                res.send(500, {'status': 'ko'});

            req.id = user.id;

            module.exports.updateUser.apply(this, [req, res]);

            res.json(200, { 'status': 'ok', 'userId': user.id });
        });

    },

    updateUser: function (req, res) {

        var userId = req.params.user_id || req.id;

        User.findById(userId, function(err, user) {

            if (err)
                res.send(500, {'status': 'ko'});

            user.password = req.body.password;
            user.fullname = req.body.fullname;
            user.age = req.body.age;
            user.zip = req.body.zip;

            user.save(function(err) {
                if (err)
                    res.send(500, {'status': 'ko'});

                res.json(200, { 'status': 'ok' });
            });

        });
    }

};
