var React = require('react');

var FocusDimmer = React.createClass({
  render: function () {
    var focusDimmer = 'focus-dimmer';

    focusDimmer += this.props.focused ? ' lights-out' : ' lights-on';

    return (
      <div className={focusDimmer} />
    );
  }
});

module.exports = FocusDimmer;
