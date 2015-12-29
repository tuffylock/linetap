var React = require('react');

var InputCursor = require('./InputCursor');

var BreakChars = new RegExp(/[\s]/);

var InputDisplay = React.createClass({
  getInitialState: function () {
    return {
      typo: false,
      loggedInput: '',
      inputTemp: '',
      remainingSourceText: ''
    };
  },

  componentDidUpdate: function (prevProps) {
    var prevText = prevProps.sourceText || '';
    var newText = this.props.sourceText || '';

    var freshSource = (newText.length > 1);
    var manualEdit = (Math.abs(newText.length - prevText.length) <= 1);


    if (freshSource && !manualEdit) {
      this.redirectFocus();
    }

    this.scrollWithInput();
  },

  componentWillReceiveProps: function (nextProps) {
    if (this.props.sourceText !== nextProps.sourceText) {
      this.setState({
        loggedInput: '',
        inputTemp: '',
        remainingSourceText: nextProps.sourceText
      });
    }
  },

  handleInput: function (e) {
    var inputChar = e.currentTarget.value;
    var inputTemp = this.state.inputTemp;
    var index = inputTemp.length;
    var sourceChar = this.state.remainingSourceText[index];

    this.checkForTypo(inputChar, sourceChar);

    var updatedTemp = inputTemp + inputChar;
    this.setState(
      { inputTemp: updatedTemp },
      this.checkForBreakOrCompletion
    );
  },

  checkForTypo: function (inputChar, sourceChar) {
    if (inputChar !== sourceChar) {
      this.setState({ typo: true });

      var inputDisplay = this;
      setTimeout(function () {
        inputDisplay.setState({ typo: false, inputTemp: '' });
      }, 600);
    }
  },

  checkForBreakOrCompletion: function () {
    if (!this.state.typo) {
      var sourceText = this.state.remainingSourceText
      var inputTemp = this.state.inputTemp;
      var index = inputTemp.length;
      var nextChar = sourceText[index]

      var breakHere = BreakChars.test(this.state.inputTemp);
      var breakNext = BreakChars.test(nextChar);


      var input = this.refs.inputTemp;
      var sourceBody = this.refs.sourceBody;
      var inputPosition = input.getBoundingClientRect().right;
      var sourcePosition = sourceBody.getBoundingClientRect().right;

      var forcedNewLine = (inputPosition > sourcePosition);


      if (breakHere || breakNext || forcedNewLine) {
        this.logInput();
      }

      if (index === sourceText.length) {
        this.logInput();
        this.wrapUp();
      }
    }
  },

  wrapUp: function () {
    this.props.registerCompletion();

    var inputDisplay = this;
    for (var i = 4; i >= 0; i--) {
      setTimeout(function () {
        var displayWrapUp = inputDisplay.state.loggedInput + ' .';
        inputDisplay.setState({ loggedInput: displayWrapUp });
      }, (i * 100));
    }
    for (var i = 40; i >= 0; i--) {
      setTimeout(function () {
        var displayClear = inputDisplay.state.loggedInput + "\n";
        inputDisplay.setState({ loggedInput: displayClear });
      }, (i * 20 + 600));
    }
  },

  logInput: function () {
    var updatedLog = this.state.loggedInput + this.state.inputTemp;
    var index = this.state.inputTemp.length;
    var updatedRemaining = this.state.remainingSourceText.slice(index);
    this.setState({
      inputTemp: '',
      loggedInput: updatedLog,
      remainingSourceText: updatedRemaining
    });
  },

  scrollWithInput: function () {
    var display = this.refs.inputDisplay;
    var input = this.refs.inputTemp;

    var inputPosition = input.getBoundingClientRect().top;
    var midDisplay = display.clientHeight / 2;

    this.lineHeight = this.lineHeight || input.clientHeight

    if (inputPosition > midDisplay) {
      display.scrollTop += this.lineHeight;
    }
  },

  redirectFocus: function () {
    if (this.state.remainingSourceText) {
      this.refs.inputProxy.focus();
    }
  },

  render: function () {
    var inputTempClass = 'input-temp'
    inputTempClass += this.state.typo ? ' typo' : '';

    var cursorActive =
      this.props.focused && this.state.remainingSourceText;

    return (
      <div
        className="input-display"
        ref="inputDisplay"
        onClick={this.redirectFocus}
      >
        <textarea
          className="input-proxy"
          ref="inputProxy"
          value=""
          onChange={this.handleInput}
          onFocus={this.props.toggleFocus}
          onBlur={this.props.toggleFocus}
        />

        <span className="logged-input">{this.state.loggedInput}</span>

        <span className="remaining-source-text" ref="sourceBody">
          {this.state.remainingSourceText}

          <span className={inputTempClass} ref="inputTemp">
            {this.state.inputTemp}
            <InputCursor active={cursorActive} />
          </span>
        </span>
      </div>
    );
  }
});

module.exports = InputDisplay;
