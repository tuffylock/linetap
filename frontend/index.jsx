var React = require('react');
var ReactDOM = require('react-dom');

var LineTap = require('./components/LineTap');

document.addEventListener('DOMContentLoaded', function () {
  root = document.getElementById('root');
  ReactDOM.render(<LineTap />, root);
});
