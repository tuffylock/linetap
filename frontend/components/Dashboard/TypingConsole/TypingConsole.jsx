var React = require('react');

var FocusDimmer = require('./FocusDimmer');
var InputDisplay = require('./InputDisplay');

var TypingConsole = React.createClass({
  getInitialState: function () {
    return { focused: false };
  },

  toggleFocus: function () {
    this.setState({ focused: !this.state.focused });
  },

  render: function () {
    return (
      <div className="typing-console">
        <FocusDimmer focused={this.state.focused} />
        <div className="monitor-screen">
          <InputDisplay toggleFocus={this.toggleFocus} />
        </div>
      </div>
    );
  }
});

module.exports = TypingConsole;
