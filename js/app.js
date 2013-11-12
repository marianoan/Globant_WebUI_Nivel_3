define([
  'jquery',
  'underscore',
  'backbone',
  'collections/Items',
  'views/ItemView',
  'models/Item'
], function ($, _, Backbone, Items, ItemView, Item) {

    return Backbone.View.extend({

        el: '#shoppingCartApp',

        //Eventos de la vista
        events: {
            //'click .icn_view_data': 'viewData'
        },

        //Inicializo y traigo la coleccion de contactos
        initialize: function () {
            this.collection = new Items();

            console.log(this.collection);
            //this.$new_movie = this.$('#new_movie');
            
            this.$itemsList = this.$('#itemsList');
            //console.log(this.$itemsList);
            /*this.$input_new_name = this.$('#new_name_input');
            this.$input_new_director = this.$('#new_director_input');
            this.$input_new_year = this.$('#new_year_input');
            this.$input_new_cast = this.$('#new_cast_input');
            this.$input_new_sinopsis = this.$('#new_sinopsis_input');
            this.$input_new_img = this.$('#new_image_input');*/
            
            this.addItem('Watchmen', '200', 'DC Comics', 'http:\/\/kalafudra.files.wordpress.com/2009/03/watchmen-cover.jpg', 'Spain', 'Lebowski ipsum this is quite a pad you got here, man. Completely unspoiled. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. We ve got a man down, Dude. Quis elit blandit fringilla a ut. I m saying, Cynthias Pomeranian. I m looking after it while Cynthia and Marty Ackerman are in Hawaii. Turpis praesent felis ligula, malesuada suscipit malesuada non, ultrices non. Whose toe was it, Walter? Urna sed orci ipsum, placerat id condimentum rutrum, rhoncus ac lorem aliquam placerat.', 'ECC Ediciones', 'Alan Moore, Dave Gibbons');
            this.addItem('V of Vendetta', '250', 'DC Comics', 'http:\/\/www.scifinow.co.uk/wp-content/uploads/2010/04/vendetta.jpg', 'Spain', 'Theyre nihilists. Posuere neque, at dignissim magna ullamcorper in aliquam sagittis massa ac tortor ultrices faucibus. Leads, yeah. Ill just check with the boys down at the Crime Lab. Theyve assigned four more detectives to the case, got us working in shifts. Curabitur eu mi sapien, ut. Im not Mr. Lebowski; youre Mr. Lebowski. Im the Dude. Ultricies ipsum morbi eget risus nulla nullam vel nisi enim, vel auctor.', 'ECC Ediciones', 'Alan Moore, David Lloyd');

            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);
            console.log(this.collection);

            this.collection.fetch();

            this.addAll();
        },

        //Atributos para un nuevo contacto
        newAttributes: function (title, price, publisher, cover, country, argument, printedBy, authors) {
            return {
                id: this.collection.nextOrder(),
                title: title,
                price: price,
                publisher: publisher,
                cover: cover,
                country: country,
                argument: argument,
                printedBy: printedBy,
                authors: authors,
                inCart: false
            };
        },

        addItem: function (title, price, publisher, cover, country, argument, printedBy, authors) {
            //var myJSON = JSON.parse('{"id": 3, "name"  : "The Italian Job", "year": "1969", "director": "Peter Collinson","img" : "http:\/\/ia.media-imdb.com/images/M/MV5BNTI1ODYwNzg3Nl5BMl5BanBnXkFtZTcwMDYzMjk3OA@@._V1_SX214_.jpg","cast" : "Michael Caine, Noel Coward, Benny Hill", "sinopsis" : "Charlies got a Job to do. Having just left prison, he finds one of his friends has attempted a high risk job in Italy right under the nose of the Mafia. Charlies friend doesnt get very far so Charlie takes over the Job. Using three Mini Coopers, a couple of Jaguars and a bus, he hopes to bring Torino to a standstill, steal the Gold and escape."}');
            //console.log(this.newAttributes());
            this.collection.create(this.newAttributes(title, price, publisher, cover, country, argument, printedBy, authors));
        },



        addOne: function (item) {
            var view = new ItemView({ model: item });
            this.$itemsList.append(view.render().el);
        },

        addAll: function () {
            this.$itemsList.html('');
            this.collection.each(this.addOne, this);
        },


    });

});