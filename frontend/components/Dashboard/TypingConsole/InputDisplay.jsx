var React = require('react');

var InputCursor = require('./InputCursor');

var BreakChars = new RegExp(/[\s]/);

var InputDisplay = React.createClass({
  getInitialState: function () {
    return { typo: false, inputLogged: '', inputTemp: '', remainingSourceText: "In fact, wrong notes always have a cause. An immediate physical cause. Just before you play a wrong note, your fingers were in a position that made that wrong note inevitable. Fixing wrong notes isn't about 'practicing harder' but about trying to unkink those systematically error-causing fingerings and hand motions." };
  },

  handleInput: function (e) {
    var index = this.state.inputTemp.length;
    var sourceChar = this.state.remainingSourceText[index];
    var inputChar = e.currentTarget.value;
    var inputTemp = this.state.inputTemp;

    if (inputChar !== sourceChar) {
      this.setState({ typo: true });
      var inputDisplay = this;
      setTimeout(function () {
        inputDisplay.setState({ typo: false, inputTemp: '' });
      }, 600);
    }

    if (!this.state.typo && (BreakChars.test(sourceChar) ||
          BreakChars.test(inputTemp))) {
      this.logInput(index);
      inputTemp = '';
    }

    var updatedTemp = inputTemp + inputChar;
    this.setState({ inputTemp: updatedTemp });

    this.refs.inputDisplay.scrollTop += 0;
  },

  logInput: function (index) {
    var updatedLog = this.state.inputLogged + this.state.inputTemp;
    var updatedRemaining = this.state.remainingSourceText.slice(index);
    this.setState({ inputLogged: updatedLog });
    this.setState({ remainingSourceText: updatedRemaining });
  },

  updateDimensions: function() {

  var w = window;
  var d = document;
  var documentElement = d.documentElement;
  var monitor = d.getElementsByClassName('monitor-screen')[0];
  var windowwidth = w.innerWidth || documentElement.clientWidth || monitor.clientWidth;
  var windowheight = w.innerHeight|| documentElement.clientHeight|| monitor.clientHeight;
  var monitorheight = this.refs.inputDisplay.scrollHeight;

      this.setState({windowwidth: windowwidth, windowheight: windowheight, monitorheight: monitorheight});
      // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
  },
  componentDidMount: function() {
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions);
  },
  componentWillUnmount: function() {
      window.removeEventListener("resize", this.updateDimensions);
  },

  render: function () {

var data = 'window width: ' + this.state.windowwidth + ', divscroll height: ' + this.state.monitorheight + ", inputtemp: '" + this.state.inputTemp + "'";

    var inputTemp = 'input-temp'
    inputTemp += this.state.typo ? ' typo' : '';

    return (
      <div ref="inputDisplay" className="input-display">

<div style={{position: 'fixed', top: 0, height: 50, width: 800, background: 'black', color: 'white'}}>{data}</div>

          <textarea
            className="input-proxy"
            value=""
            onChange={this.handleInput}
            onFocus={this.props.toggleFocus}
            onBlur={this.props.toggleFocus}
          />

          <span className="input-logged">{this.state.inputLogged}</span>

          <span className="remaining-source-text">
            {this.state.remainingSourceText}
            <span className={inputTemp}>
              {this.state.inputTemp}<InputCursor />
            </span>
          </span>
      </div>
    )
  }
});

module.exports = InputDisplay;
