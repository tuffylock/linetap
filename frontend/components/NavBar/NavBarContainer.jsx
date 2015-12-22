var React = require('react');

var NavBar = require('./NavBar');
var UploadForm = require('./UploadForm');

var NavBarContainer = React.createClass ({
  render: function () {
    return (
      <div className="nav-pane">
        <NavBar />
        <UploadForm />
      </div>
    );
  }
});

module.exports = NavBarContainer;
