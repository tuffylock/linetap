var React = require('react');

var InputCursor = React.createClass({
  render: function () {
    var inputCursor = 'input-cursor';
    inputCursor += this.props.active ? ' active' : '';

    return (
      <i className={inputCursor}>&nbsp;</i>
    );
  }
});

module.exports = InputCursor;
