var Backbone = require('backbone'),
    ContactModel = require('../models/user');

module.exports = UsersCollection = Backbone.Collection.extend({
    model:  UserModel,
    url: '/api/user'
});
