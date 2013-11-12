define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    var Movie = Backbone.Model.extend({
        

        defaults: {
            id: 0,
            name: 'noname',
            year: 'address',
            director: 'mobile',
            img: 'http://placehold.it/370x75',
            cast: 'email',
            sinopsis: 'lorem ipsum dolor'
        },

        //url: "data.json"
    });
    // Return the model for the module
    return Movie;
});
