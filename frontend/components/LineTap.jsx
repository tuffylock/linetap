var React = require('react');

var Dashboard = require('./Dashboard');

var LineTap = React.createClass({
  render: function () {

    return (
      <div id="linetap">
        <Dashboard />
      </div>
    );
  }
});

module.exports = LineTap;
