var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

Parse.initialize("SedOxWgWCarMJnHhZG4qPznAwkA9oCODrSWnR0mt", "h1Kz38TDuDMh093nB8WdWcu5wpdKoOEXl06PVEjF");


var cooldown = 0;
var previewsComment = '';

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <CommentList/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      comments: (new Parse.Query('Comment').descending("createdAt"))
    };
  },

  render: function() {

    var commentNodes = this.data.comments.map(function (comment) {
      return (
        // <p key={comment.id}>{comment.info}</p>
        <Comment key={comment.id} info={comment.info}/>

      );
    });

    return (
      <div className="CommentList">
        <CommentInput/>
        {commentNodes}
      </div>
    )
  },

  componentDidMount: function() {
    var refresher = this.refreshQueries;
    var interval = setInterval( function() {
      console.log('refreshing');
      refresher();
    }, 3000)
  }

});



var Comment = React.createClass({
  render: function() {
    return (
      <div className="Comment">
      {this.props.info}
      </div>
    )
  }
});



var CommentInput = React.createClass({
  render: function() {
    return (
        <input
          className="CommentInput"
          type="text"
          placeholder="Enter a comment..."
          submit={this.addComment}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          maxLength="80"
        />
    )
  },


  addComment: function() {

    cooldown  = 5;

    ParseReact.Mutation.Create('Comment', { info: this.state.value }).dispatch()
    .then(function() {
        console.log('refreshing')
    }.bind(this));
  },

  onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },

  onKeyDown: function(e) {
    if (e.keyCode === 13) {
      if (e.target.value.length > 100) {
        alert('Comment too long, faggot');
        e.target.value = '';
      }
      else if (cooldown>0) {
        alert('wait '+cooldown+' seconds to post again');
      }
      else if (e.target.value == previewsComment) {
        alert('Dont double post, jerk!');
        e.target.value = '';
      }
      else {
        previewsComment = e.target.value;

        this.addComment();
        e.target.value = '';
      }
    }
  },
})




React.render(
  <CommentBox/>,
  document.getElementById('app')
);

var coolDownInterval = setInterval(function() {
  if (cooldown>0) {
    cooldown--;

  }
  console.log(cooldown)
}, 1000)
