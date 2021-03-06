//initializes app
var app = app || {};

app.CommentsView = Backbone.View.extend({

  tagName: 'ul',
  className: 'comments',

  initialize: function(options) {
    _.bindAll();
    var that = this;

    //el is set based on id passed when view is created
    this.givenTo = this.options.givenTo;

    this.collection.bind('reset', function() {
      console.log('hello')
    }, this)

    //for developers page
    if(typeof this.options.$el !== 'undefined') {
      this.$el = this.options.$el;
      console.log('wtf')
    };

    this.collection.fetch({success: function() {
      that.addAll();  
    }});
    
  },

  render: function() {

  },

  addOne: function( comment ) {
    var tempHTML = new app.CommentView( {model: comment} );
    this.$el.append(tempHTML.render().el);
  },

  //add comments belonging to the candidate
  addAll: function() {
    //console.log(this.collection)
    var tempArray = this.collection.filter( function( comment ) {  
      return comment.get('givenTo') === this.givenTo
    }, this);
    tempArray.forEach( function( comment ) {
        this.addOne( comment );
    }, this );

  }

}); 

app.CommentView = Backbone.View.extend({

  tagName: 'li',
  template: _.template( $('#comment-template').html() ),
  
  initialize: function() {
  }, 

  render: function() {
    this.$el.html( this.template( {model: this.model.toJSON() } ) );
    return this;
  }
});

