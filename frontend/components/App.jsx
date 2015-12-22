var React = require('react');

var Dashboard = require('./Dashboard/Dashboard');
var NavBarContainer = require('./NavBar/NavBarContainer');

var App = React.createClass({
  render: function () {

    return (
      <div>
        <NavBarContainer />
        <Dashboard />
      </div>
    );
  }
});

module.exports = App;
