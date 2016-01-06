var React = require('react');

var ExerciseActions = require('../../../actions/ExerciseActions');

var InputCursor = require('./InputCursor');

var BreakChars = new RegExp(/[\s]/);

var InputDisplay = React.createClass({
  getInitialState: function () {
    return {
      mistyped: false,
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
    if (!this.state.loggedInput && !this.state.inputTemp) {
      this.startTime = Date.now();
    }

    var inputTemp = this.state.inputTemp;

    this.index = inputTemp.length;
    this.inputChar = e.currentTarget.value;
    this.sourceChar = this.state.remainingSourceText[this.index];

    this.checkForTypo();

    var updatedTemp = inputTemp + this.inputChar;
    this.setState(
      { inputTemp: updatedTemp },
      this.checkForBreakOrCompletion
    );
  },

  checkForTypo: function () {
    if (this.inputChar !== this.sourceChar) {
      var typo = {
        textIndex: (this.state.loggedInput.length + this.index),
        targetChar: this.sourceChar,
        typedChar: this.inputChar,
        timestamp: (Date.now() - this.startTime)
      };

      ExerciseActions.logTypo(typo);

      this.setState({ mistyped: true });

      var inputDisplay = this;
      setTimeout(function () {
        inputDisplay.setState({ mistyped: false, inputTemp: '' });
      }, 600);
    }
  },

  checkForBreakOrCompletion: function () {
    if (!this.state.mistyped) {
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
    var inputDisplay = this;
    var timeTaken = Date.now() - this.startTime

    setTimeout(function () {
      inputDisplay.props.registerCompletion(timeTaken);
    }, 1500);

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
    var input = this.refs.inputTemp.getBoundingClientRect();

    var midDisplay = display.clientHeight / 2;

    this.lineHeight = this.lineHeight || input.height

    if (input.top > midDisplay) {
      display.scrollTop += this.lineHeight;
    }
  },

  redirectFocus: function () {
    if (this.state.remainingSourceText) {
      this.refs.inputProxy.focus();
    }
  },

  render: function () {
    var staged = this.state.loggedInput + this.state.inputTemp + this.state. remainingSourceText;
    var instructions = (        <div className="instructions">
          <ul>
          <li>Upload practice material via the left sidebar.</li>

          <li>Try entering text full of words you often mistype - your thesis, your business's address, that facebook comment - or use the 'demo text' option.</li>

          <li>You'll be typing in the center screen. When you make a typo, the text will flash red and take you back to the start of that word. Progress by typing the word correctly - in one go, from start to finish, no typos.</li>

          <li>Once you finish, the words per minute, accuracy, and a summary of any typos is displayed.</li>
          </ul>
        </div>)


    var inputTempClass = 'input-temp';
    inputTempClass += this.state.mistyped ? ' typo' : '';

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


        {!staged && instructions}
      </div>
    );
  }
});

module.exports = InputDisplay;
