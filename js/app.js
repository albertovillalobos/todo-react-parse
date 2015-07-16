var React = require('react');
var Parse = require('parse').Parse;

Parse.initialize("fUnC8PIBgPR26VUGhbsZFH4tStFUFyOZJ6baLo8O", "CkPiEsxSHfqtriaJ266t2yknRXArxBy1lVs5WQvI");


var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "how about no?", text: "This is *another* comment"},
  {author: "how about yeah?", text: "This is *another* comment"},
  {author: "Oh lol", text: "This is *another* comment"},
  {author: "asdf", text: "This is *another* comment"},
  {author: "1243", text: "This is *another* comment"},
  {author: "nope", text: "This is *another* comment"},
  {author: "asdfmzx", text: "This is *another* comment"},
  {author: "asd", text: "This is *another* comment"},

];



// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
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

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  render:  function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    )
  }
})

React.render(
  <CommentBox data={data}/>,
  document.getElementById('app')
);
