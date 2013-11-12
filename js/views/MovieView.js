define([
  'jquery',
  'underscore',
  'backbone',
  'models/Movie',
  'text!MovieTemplate.html'
], function ($, _, Backbone, Movie, MovieTemplate) {

    var MovieView = Backbone.View.extend({

        //el: $("#contacts_table"),
        //Cada item es un tr.
        tagName: 'article',

        // El template para cada item.
        //template: _.template($('#item-template').html()),
        

        // Los eventos de cada item.
        events: {
            'click .edit': 'edit',
            'click .destroy': 'clear',
            'click #edit_button': 'close',
        },

        initialize: function () {
            //this.model = new Contact();
            this.listenTo(this.model, 'destroy', this.remove);
            this.template = _.template(MovieTemplate);
            
        },

        //Renderea todo el item.
        render: function () {
            
            this.$el.html(this.template(this.model.toJSON()));

            //console.log(this.model.toJSON());

            this.$movie_edit_detail = this.$('.movie_edit_detail');

            this.$movie_detail = this.$('.movie_detail');

            return this;
        },



        //Borra el item.
        clear: function () {
            this.model.destroy();
        },

        edit: function () {
            this.$movie_detail.hide();

            this.$movie_edit_detail.show();
        },

        //Cierro la vista de edicion y guardo el item.
        close: function () {
            var name = this.$('#edit_name_input').val().trim();
            var director = this.$('#edit_director_input').val().trim();
            var year = this.$('#edit_year_input').val().trim();
            var cast = this.$('#edit_cast_input').val().trim();
            var sinopsis = this.$('#edit_sinopsis_input').val().trim();
            var img = this.$('#edit_image_input').val().trim();


            if (name) {
                this.model.save({ name: name, director: director, year: year, cast: cast, sinopsis: sinopsis, img: img });
                //modeljson = this.model.toJSON();
                //console.log(modeljson);
                this.render();
            }

        }

    });

    return MovieView;
});


