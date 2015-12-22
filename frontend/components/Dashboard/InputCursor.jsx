var React = require('react');

var InputCursor = React.createClass({
  render: function () {
    var cursorClass = 'input-cursor';

    if (this.props.focused) {
      cursorClass = cursorClass += ' focused';
    } else {
      cursorClass = cursorClass += ' unfocused';
    }

    return (
      <span className={cursorClass}>&nbsp;</span>
    );
  }
});

module.exports = InputCursor;
