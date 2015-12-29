var React = require('react');

var ResultsDisplay = React.createClass({
  componentDidMount: function () {
    this.refs.focusProxy.focus();
  },

  render: function () {
    return (
      <div className="results-display">
        {this.props.sourceText.length} characters typed! Nice.
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
