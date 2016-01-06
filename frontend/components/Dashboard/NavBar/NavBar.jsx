var React = require('react');

var UploadForm = require('./UploadForm');

var NavBar = React.createClass({
  render: function () {
    return (
      <div className="nav-pane">
        <div className="logo"/>
        <UploadForm />
      </div>
    );
  }
});

module.exports = NavBar;
