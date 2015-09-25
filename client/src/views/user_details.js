var Marionette = require('backbone.marionette');

module.exports = ContactDetailsView = Marionette.ItemView.extend({
    template: require('../../templates/user_details.hbs'),
    events: {
        'click a.back': 'goBack',
        'click a.delete': 'deleteUser'
    },

    goBack: function(e) {
        e.preventDefault();
        window.App.controller.home();
    },
    deleteUser: function(e) {
        e.preventDefault();
        console.log('Deleting user');
        window.App.data.users.remove(this.model);

        // this will actually send a DELETE to the server:
        this.model.destroy();

        window.App.controller.home();
    }
});
