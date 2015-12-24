var React = require('react');

var Dashboard = require('./Dashboard/Dashboard');

var App = React.createClass({
  render: function () {

    return (
      <div className="proto-typist">
        <Dashboard />
      </div>
    );
  }
});

module.exports = App;
