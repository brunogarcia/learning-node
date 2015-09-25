var Marionette = require('backbone.marionette'),
    UsersView = require('./views/users'),
    UserDetailsView = require('./views/user_details'),
    AddUserView = require('./views/add');

module.exports = Controller = Marionette.Controller.extend({
    initialize: function() {
        App.core.vent.trigger('app:log', 'Controller: Initializing');
        window.App.views.usersView = new UsersView({ collection: window.App.data.users });
    },

    home: function() {
        var view = window.App.views.usersView;
        App.core.vent.trigger('app:log', 'Controller: "Home" route hit.');
        this.renderView(view);
        window.App.router.navigate('#');
    },

    details: function(id) {
        var view = new UserDetailsView({ model: window.App.data.users.get(id)});
        App.core.vent.trigger('app:log', 'Controller: "User Details" route hit.');
        this.renderView(view);
        window.App.router.navigate('details/' + id);
    },

    add: function() {
        var view = new AddUserView();
        App.core.vent.trigger('app:log', 'Controller: "Add User" route hit.');
        this.renderView(view);
        window.App.router.navigate('add');
    },

    renderView: function(view) {
        this.destroyCurrentView(view);
        App.core.vent.trigger('app:log', 'Controller: Rendering new view.');
        $('#js-boilerplate-app').html(view.render().el);
    },

    destroyCurrentView: function(view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            App.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
            window.App.views.currentView.close();
        }
        window.App.views.currentView = view;
    }
});
