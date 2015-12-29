var React = require('react');

var UploadForm = require('./UploadForm');

var NavBar = React.createClass({
  render: function () {
    return (
      <div className="nav-pane">
        <p><a href="https://github.com/tuffylock/proto-typist">proto-typist#github</a></p>
        <p><a href="https://proto-typist.herokuapp.com/">proto-typist#heroku</a></p>

        <UploadForm />
      </div>
    );
  }
});

module.exports = NavBar;
