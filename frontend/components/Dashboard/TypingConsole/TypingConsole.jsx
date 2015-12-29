var React = require('react');

var ApiUtil = require('../../../util/ApiUtil');
var ReportStore = require('../../../stores/ReportStore');

var FocusDimmer = require('./FocusDimmer');
var InputDisplay = require('./InputDisplay');
var ResultsDisplay = require('./ResultsDisplay');

var TypingConsole = React.createClass({
  getInitialState: function () {
    return { focused: false, complete: false, sourceText: '' };
  },

  componentDidMount: function () {
    this.sourceTextListener =
      ReportStore.addListener(this.updateSourceText);
  },

  componentWillUnmount: function () {
    this.sourceTextListener.remove();
  },

  updateSourceText: function () {
    this.setState({ complete: false }, function () {
      this.setState({ sourceText: ReportStore.sourceText() });
    });
  },

  registerCompletion: function () {
    typingConsole = this;
    setTimeout(function () {
      typingConsole.setState({ complete: true, focused: false });
    }, 1500);
  },

  toggleFocus: function () {
    this.setState({ focused: !this.state.focused });
  },

  render: function () {
    return (
      <div className="typing-console">
        <FocusDimmer dimmed={this.state.focused} />

        <div className="monitor-screen">
          { !this.state.complete && <InputDisplay
            sourceText={this.state.sourceText}
            focused={this.state.focused}
            toggleFocus={this.toggleFocus}
            registerCompletion={this.registerCompletion}
          /> }

          { this.state.complete && <ResultsDisplay sourceText={this.state.sourceText} toggleFocus={this.toggleFocus} /> }
        </div>
      </div>
    );
  }
});

module.exports = TypingConsole;
