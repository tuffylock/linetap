var React = require('react');

var ResultsDisplay = React.createClass({
  componentDidMount: function () {
    this.refs.focusProxy.focus();
  },

  render: function () {
    var sourceText = this.props.sourceText;
    var totalChars = sourceText.length;
    var timeTaken = Math.round(this.props.timeTaken / 1000) || 0.1;

    var wpm = Math.round((totalChars / 5) / (timeTaken / 60));
    var accuracy =
      Math.round(100*((totalChars-this.props.typos.length)/totalChars));

    var typos = this.props.typos;
    if (typos.length > 0) {
      typos = typos.map( function (typo, index) {
        return (
          <li key={index} className="typo">
            Character number {typo.textIndex + 1} ("{sourceText.substring(typo.textIndex-5, typo.textIndex)}<span style={{color: '#a80000'}}>{typo.targetChar}</span>{sourceText.substring(typo.textIndex+1, typo.textIndex+5)}")
              <ul>
                <li>You typed: "{typo.typedChar}"</li>
              </ul>
          </li>
        );
      });
    } else {
      typos = " None! Good job.";
    }
    return (
      <div className="results-display">
        You typed {totalChars} characters in {timeTaken} second{(timeTaken !== 1) && 's'}
        <br/><br/>
        Your WPM: {wpm}
        <br/>
        Your accuracy: {accuracy}%
        <br/><br/>

        <div className="typo-list">
        <ul>
          Typos:
          {typos}
        </ul>
        </div>

        <div
          tabIndex="0"
          ref="focusProxy"
          className="focus-proxy"
          onFocus={this.props.toggleFocus}
          onBlur={this.props.toggleFocus}
        />
      </div>
    );
  }
});

module.exports = ResultsDisplay;
