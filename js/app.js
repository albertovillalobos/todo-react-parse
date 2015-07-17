var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

Parse.initialize("SedOxWgWCarMJnHhZG4qPznAwkA9oCODrSWnR0mt", "h1Kz38TDuDMh093nB8WdWcu5wpdKoOEXl06PVEjF");

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
    return {
      comments: (new Parse.Query('Comment'))
    };
  },

  render: function() {
    console.log('data',this.data);
    var commentNodes = this.data.comments.map(function (comment) {
      return (
        <p>{comment.info}</p>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>

    )
  }
});


React.render(
  <CommentBox/>,
  document.getElementById('app')
);
