var React = require('react');

var ApiUtil = require('../../../util/ApiUtil');
var ExerciseStore = require('../../../stores/ExerciseStore');

var FocusDimmer = require('./FocusDimmer');
var InputDisplay = require('./InputDisplay');
var ResultsDisplay = require('./ResultsDisplay');

var TypingConsole = React.createClass({
  getInitialState: function () {
    return { focused: false, complete: false, sourceText: '' };
  },

  componentDidMount: function () {
    this.sourceTextListener =
      ExerciseStore.addListener(this.updateSourceText);
  },

  componentWillUnmount: function () {
    this.sourceTextListener.remove();
  },

  updateSourceText: function () {
    this.setState({ complete: false }, function () {
      this.setState({ sourceText: ExerciseStore.sourceText() });
    });
  },

  registerCompletion: function (timeTaken) {
    this.timeTaken = timeTaken;
    this.setState({ complete: true, focused: false });
  },

  toggleFocus: function () {
    this.setState({ focused: !this.state.focused });
  },

  render: function () {
    var typos = ExerciseStore.typos();

    return (
      <div className="typing-console">
        <div className="typing-console-inset" />
        <FocusDimmer dimmed={this.state.focused} />

        <div className="monitor-screen">
          { !this.state.complete && <InputDisplay
            sourceText={this.state.sourceText}
            focused={this.state.focused}
            toggleFocus={this.toggleFocus}
            registerCompletion={this.registerCompletion}
          /> }

          { this.state.complete && <ResultsDisplay
            sourceText={this.state.sourceText}
            timeTaken={this.timeTaken}
            typos={typos}
            toggleFocus={this.toggleFocus}
          /> }
        </div>
      </div>
    );
  }
});

module.exports = TypingConsole;
