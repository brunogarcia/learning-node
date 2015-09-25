var Marionette = require('backbone.marionette');

module.exports = AddView = Marionette.ItemView.extend({
    template: require('../../templates/add.hbs'),
    events: {
        'click a.save-button': 'save'
    },

    save: function(e) {
        e.preventDefault();
        var newUser = {
            fullname: this.$el.find('#name_first').val() + " " + this.$el.find('#name_last').val(),
            email: this.$el.find('#email').val(),
            password: this.$el.find('#password').val(),
            age: this.$el.find('#age').val(),
            zip: this.$el.find('#zip').val()
        };

        window.App.data.users.create(newUser);
        window.App.core.vent.trigger('app:log', 'Add View: Saved new user!');
        window.App.controller.home();
    }
});
