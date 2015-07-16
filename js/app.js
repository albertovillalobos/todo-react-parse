var React = require('react');
var Parse = require('parse').Parse;

Parse.initialize("fUnC8PIBgPR26VUGhbsZFH4tStFUFyOZJ6baLo8O", "CkPiEsxSHfqtriaJ266t2yknRXArxBy1lVs5WQvI");


var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},
  {author: "Jordan Walke", text: "This is *another* comment"},

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
    return (
      <div className="CommentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is another comment</Comment>
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
