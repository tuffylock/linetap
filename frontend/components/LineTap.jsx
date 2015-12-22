var React = require('react');

var Dashboard = require('./Dashboard/Dashboard');
var NavBarContainer = require('./NavBar/NavBarContainer');

var LineTap = React.createClass({
  render: function () {

    return (
      <div id="linetap">
        <NavBarContainer />
        <Dashboard />
      </div>
    );
  }
});

module.exports = LineTap;
