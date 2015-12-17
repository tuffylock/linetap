var React = require('react');

var TypingInput = React.createClass({
  getInitialState: function () {
    return { input: "", errors: [] };
  },

  addError: function (index, sourceChar, inputChar) {
    var errors = this.state.errors.slice();
    var id = Object.keys(errors).length;

    var error = {
      id: id,
      index: index,
      sourceChar: sourceChar,
      inputChar: inputChar
    };

    errors.push(error);
    this.setState({ errors: errors });
  },

  handleInput: function (e) {
    var newInput = e.currentTarget.value;
    var index = newInput.length - 1;

    this.setState({ input: newInput });

    if (index >= 0) {
      var sourceChar = this.props.source[index];
      var inputChar = newInput[index];

      if (inputChar !== sourceChar) {
        this.addError(index, sourceChar, inputChar);
      }
    }
  },

  render: function () {
    var errors = this.state.errors.map(function (error) {
      return <li key={error.id}>index: {error.index}, source: {error.sourceChar}, input: {error.inputChar}</li>
    });

    return (
      <div className="typing-input">
        <textarea onChange={this.handleInput} value={this.state.input}></textarea>
        <div>{this.state.input}</div>
        <ul>{errors}</ul>
      </div>
    );
  }
});

module.exports = TypingInput;
