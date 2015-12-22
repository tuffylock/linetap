var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App');

document.addEventListener('DOMContentLoaded', function () {
  root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
