var React = require('react');

var Dashboard = require('./Dashboard');

var LineTap = React.createClass({
  render: function () {

    return (
      <div id="linetap">
        <div className="dashboard">
          <Dashboard />
        </div>
      </div>
    );
  }
});

module.exports = LineTap;
