var React = require('react');

var NavBar = React.createClass({
  render: function () {
    return (
      <div className="nav-pane">
        <p><a href="https://github.com/tuffylock/linetap">linetap#github</a></p>
        <p><a href="https://linetap.herokuapp.com/">linetap#heroku</a></p>
        <p>**login</p>
        <p>**stats</p>
        <p>**feedback</p>
      </div>
    );
  }
});

module.exports = NavBar;
