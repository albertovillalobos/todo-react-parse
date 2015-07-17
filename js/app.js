var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var $ = require('jQuery');

// console.log($);

Parse.initialize("SedOxWgWCarMJnHhZG4qPznAwkA9oCODrSWnR0mt", "h1Kz38TDuDMh093nB8WdWcu5wpdKoOEXl06PVEjF");


for (var i = 0; i < 10; i++) {
  var Comment = Parse.Object.extend("Comment");
  var comment = new Comment();
  comment.set("info", "item # "+i);

  comment.save(null, {
    success: function(object) {
      console.log("success");
    },

    error: function(object, error) {
      console.log("error")
    }

  })
}








// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList/>
      </div>
    );
  }
});

var CommentList = React.createClass({

  mixins: [ParseReact.Mixin],

  observe: function() {


    var Comment = Parse.Object.extend("Comment");
    var query = new Parse.Query(Comment);
    query.find( {
      success: function(object) {
        console.log(object);
      },

      error:  function(object, error) {
        console.log(object, error);
      }
    });


    return {
      comments: (new Parse.Query(Comment))
    };
  },

  render: function() {

    console.log(this.data);
    var commentNodes = this.data.comments.map(function (comment) {
      return (
        <Comment>
          {comment.info}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>

    )
  }
});


var Comment = React.createClass({
  render:  function() {
    return (
      <div className="comment">
        <h2>Comment: </h2>
        {this.props.children}
      </div>
    )
  }
})


React.render(
  <CommentBox/>,
  document.getElementById('app')
);
