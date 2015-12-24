var React = require('react');
var InputCursor = require('./InputCursor');

var TypingInput = React.createClass({
  getInitialState: function () {
    return { lastChar: '', inputBody: '', temp: '', mistyped: false, errors: [], focused: false };
  },

  componentDidUpdate: function (prevProps) {
    prevText = prevProps.sourceText || '';
    newText = this.props.sourceText || '';

    if (Math.abs(newText.length - prevText.length) > 1) {
      this.handleFocus();
    }
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.sourceText !== this.props.sourceText) {
      this.setState({ inputBody: '', temp: '' });
    }
  },

  addError: function (index, sourceChar, inputChar) {
    var errors = this.state.errors.slice();
    var id = errors.length;

    var error = {
      id: id,
      index: index,
      sourceChar: sourceChar,
      inputChar: inputChar
    };

    errors.push(error);
    this.setState({ errors: errors });
  },

  handleFocus: function () {
    if (this.props.sourceText && this.props.sourceText.length > 0) {
      this.refs.textInput.focus();
    }
  },

  ___donetyping: function () {
    alert("done! good job! keep practicing this one or upload some new content! ***this popup is a working acknowledgement of completion and will be replaced with something less obnoxious***");
      this.setState({ inputBody: '', temp: '' });
  },

  handleInput: function (e) {
    var index = this.state.inputBody.length + this.state.temp.length;

    if (index === this.props.sourceText.length) {
      this.___donetyping();
    }

    var sourceChar = this.props.sourceText[index];
    var inputChar = e.currentTarget.value;

    var temp = this.state.temp + inputChar;

    var breakChars = new RegExp(/[\s\.\?!:;,"']/);

    if (inputChar !== sourceChar) {
      this.addError(index, sourceChar, inputChar);
      this.setState({ mistyped: true });
      that = this;
      setTimeout(function () {
        that.setState({ mistyped: false, temp: "" });
      }, 400);
    } else if (breakChars.test(inputChar) && !this.state.mistyped) {
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

    var currentStyle = {background: '#2e454e'};

    if (this.state.mistyped === true) {
      currentStyle = {background: '#a80000'};
    }

    var dimmer = 'dimmer';
    dimmer += this.state.focused ? ' lights-out' : ' lights-on';

    var monitor = 'typing-input';
    monitor += this.props.sourceText ? '' : ' standby';

    return (
<div className="input-pane">
      <div className={dimmer} />
      <div className={monitor}>
        <textarea
          ref="textInput"
          value={this.state.lastChar}
          onChange={this.handleInput}
          onFocus={this.focus}
          onBlur={this.blur}
        ></textarea>

        <div className="source-body">{this.props.sourceText}</div>

        <div className="input-body" onClick={this.handleFocus}>
          {this.state.inputBody}
          <span style={currentStyle}>{this.state.temp}</span>
          <InputCursor focused={this.state.focused} />
        </div>
      </div>
<div className="errors">{errors}</div>
</div>
    );
  }
});

module.exports = TypingInput;
