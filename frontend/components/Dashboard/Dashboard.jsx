var React = require('react');

var ApiUtil = require('../../util/ApiUtil');
var DocumentStore = require('../../stores/DocumentStore');

var InfoPane = require('./InfoPane');
var TypingInput = require('./TypingInput');


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
      body = "";
    };

    return (
      <div id="dashboard">
        <TypingInput source={body} />
        <InfoPane />
      </div>
    );
  }
});

module.exports = Dashboard;
