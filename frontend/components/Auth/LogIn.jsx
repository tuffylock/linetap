var React = require('react');

var LogIn = React.createClass({
  render: function () {
    return (
      <form className="log-in">
        <label htmlFor="log-in-username">Username</label>
        <input type="text" id="log-in-username">

        <label htmlFor="log-in-password">Password</label>
        <input type="password" name="user[password]" id="log-in-password">

        <input type="submit" value="Log in">
      </form>
    );
  }
});

module.exports = LogIn;
