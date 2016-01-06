var React = require('react');

var InputCursor = React.createClass({
  render: function () {
    var inputCursor = 'input-cursor';
    inputCursor += this.props.active ? ' active' : '';

    return (
      <span className={inputCursor}>&nbsp;</span>
    );
  }
});

module.exports = InputCursor;
