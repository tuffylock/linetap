var React = require('react');

var TypingInput = React.createClass({
  getInitialState: function () {
    return { lastChar: "", inputBody: "", temp: "", mistyped: false, errors: [], focused: false };
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

  handleFocus: function (e) {
    this.refs.textInput.focus();
  },

  handleInput: function (e) {
    var index = this.state.inputBody.length + this.state.temp.length;

    var sourceChar = this.props.source[index];
    var inputChar = e.currentTarget.value;

    var temp = this.state.temp + inputChar;

    if (inputChar !== sourceChar) {
      this.addError(index, sourceChar, inputChar);
      this.setState({ mistyped: true });
      that = this;
      setTimeout(function () {
        that.setState({ mistyped: false, temp: "" });
      }, 400);
    } else if (inputChar === ' ' && !this.state.mistyped) {
      var newBody = this.state.inputBody + temp;
      temp = "";
      this.setState({ inputBody: newBody })
    }
    this.setState({ temp: temp })
  },

  focus: function() {
      this.setState({ focused: true });
  },

  blur: function() {
      this.setState({ focused: false });
  },

  render: function () {
    var errors = this.state.errors.map(function (error) {
      return <li className="error" key={error.id}>index: {error.index}, source: {error.sourceChar}, input: {error.inputChar}</li>
    });

    var currentStyle = {background: '#ccdddd'};

    if (this.state.mistyped === true) {
      currentStyle = {background: '#ECAAA8'};
    }

    var inputCursor = this.state.focused? <span className="input-caret">&nbsp;</span> : <span></span>;

    return (
            <div>
      <div className="typing-input">
        <input autoFocus
          ref="textInput"
          type="text"
          value={this.state.lastChar}
          onChange={this.handleInput}
          onFocus={this.focus}
          onBlur={this.blur}
        />
        <div className="input-body" onClick={this.handleFocus}>
        {this.state.inputBody}
        <span style={currentStyle}>{this.state.temp}</span>
        {inputCursor}
        </div>
        <div className="source-body">{this.props.source}</div>
      </div>
            {errors}
            </div>
    );
  }
});

module.exports = TypingInput;
