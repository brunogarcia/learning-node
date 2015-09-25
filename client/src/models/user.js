var Backbone = require('backbone');

module.exports = UserModel = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: 'api/user'
});
