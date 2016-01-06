var React = require('react');

var ApiUtil = require('../../util/ApiUtil');
var DocumentStore = require('../../stores/DocumentStore');

var InfoDisplay = require('./InfoDisplay/InfoDisplay');
var NavBar = require('./NavBar/NavBar');
var TypingConsole = require('./TypingConsole/TypingConsole');


var Dashboard = React.createClass({
  getInitialState: function () {
    return { documents: DocumentStore.all() };
  },

  componentDidMount: function () {
    this.onChangeListener = DocumentStore.addListener(this._onChange);
    ApiUtil.fetchAllDocuments();
  },

  componentWillUnmount: function () {
    this.onChangeListener.remove();
  },

  _onChange: function () {
    this.setState({ documents: DocumentStore.all() });
  },

  render: function () {
    var body;

    if (this.state.documents[0]) {
      body = this.state.documents[0].body;
    } else {
      body = '';
    };

    return (
      <div className="dashboard">
        <div className="texture" />

        <NavBar />
        <TypingConsole />
        <InfoDisplay />
      </div>
    );
  }
});

module.exports = Dashboard;
