define([
  'jquery',
  'underscore',
  'backbone',
  'collections/Movies',
  'views/MovieView',
  'models/Movie'
], function ($, _, Backbone, Movies, MovieView, Movie) {

    return Backbone.View.extend({

        el: '#movie_app',

        //Eventos de la vista
        events: {
            'click #save_button': 'create_movie',
            'click .icn_view_movies': 'view_movies_list',
            'click .icn_add_movie': 'add_movie'
        },

        //Inicializo y traigo la coleccion de contactos
        initialize: function () {
            this.collection = new Movies();

            console.log(this.collection);
            this.$new_movie = this.$('#new_movie');
            
            this.$movies_list = this.$('#movie_list');
            console.log(this.$movies_list);
            this.$input_new_name = this.$('#new_name_input');
            this.$input_new_director = this.$('#new_director_input');
            this.$input_new_year = this.$('#new_year_input');
            this.$input_new_cast = this.$('#new_cast_input');
            this.$input_new_sinopsis = this.$('#new_sinopsis_input');
            this.$input_new_img = this.$('#new_image_input');

            this.view_movies_list();

            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);


            this.collection.fetch();
        },

        //Atributos para un nuevo contacto
        newAttributes: function () {
            return {
                id: this.collection.nextOrder(),
                name: this.$input_new_name.val().trim(),
                year: this.$input_new_year.val().trim(),
                director: this.$input_new_director.val().trim(),
                img: this.$input_new_img.val().trim(),
                cast: this.$input_new_cast.val().trim(),
                sinopsis: this.$input_new_sinopsis.val().trim(),
            };
        },

        create_movie: function (event) {
            //var myJSON = JSON.parse('{"id": 3, "name"  : "The Italian Job", "year": "1969", "director": "Peter Collinson","img" : "http:\/\/ia.media-imdb.com/images/M/MV5BNTI1ODYwNzg3Nl5BMl5BanBnXkFtZTcwMDYzMjk3OA@@._V1_SX214_.jpg","cast" : "Michael Caine, Noel Coward, Benny Hill", "sinopsis" : "Charlies got a Job to do. Having just left prison, he finds one of his friends has attempted a high risk job in Italy right under the nose of the Mafia. Charlies friend doesnt get very far so Charlie takes over the Job. Using three Mini Coopers, a couple of Jaguars and a bus, he hopes to bring Torino to a standstill, steal the Gold and escape."}');
            //console.log(this.newAttributes());
            this.collection.create(this.newAttributes());
            this.$input_new_name.val('');
            this.$input_new_director.val('');
            this.$input_new_year.val('');
            this.$input_new_cast.val('');
            this.$input_new_sinopsis.val('');
            this.$input_new_img.val('http://placehold.it/370x175');
            this.view_movies_list();
        },

        view_movies_list: function () {
            this.$new_movie.hide();
            this.$movies_list.show();
        },

        add_movie: function () {
            this.$new_movie.show();
            this.$movies_list.hide();
        },

        addOne: function (movie) {
            var view = new MovieView({ model: movie });
            this.$movies_list.append(view.render().el);
        },

        addAll: function () {
            this.$movies_list.html('');
            this.collection.each(this.addOne, this);
        }

    });

});