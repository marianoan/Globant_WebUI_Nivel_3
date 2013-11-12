define([
  'underscore',
  'backbone',
  'localStorage',
  'models/Movie',
  'views/MovieView'
], function (_, Backbone, localStorage, Movie, MovieView) {

    var Movies = Backbone.Collection.extend({
        model: Movie,

        localStorage: new localStorage('movie_collectorz'),

        //url: "data.json",

        nextOrder: function () {
            if (!this.length) {
                return 1;
            }
            return this.last().get('order') + 1;
        },



    });
    // You don't usually return a collection instantiated
    return Movies;
});
