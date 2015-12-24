var React = require('react');

var ApiUtil = require('../../util/ApiUtil');
var DocumentStore = require('../../stores/DocumentStore');
var ReportStore = require('../../stores/ReportStore');

var InfoPane = require('./InfoPane');
var NavBarContainer = require('./NavBar/NavBarContainer');
var TypingInput = require('./TypingInput');


var Dashboard = React.createClass({
  getInitialState: function () {
    return { documents: DocumentStore.all(), bodyText: ReportStore.bodyText() };
  },

  componentDidMount: function () {
    this.onChangeListener = DocumentStore.addListener(this._onChange);
    this.reportTextListener = ReportStore.addListener(this._onChange);
    ApiUtil.fetchAllDocuments();
  },

  componentWillUnmount: function () {
    this.onChangeListener.remove();
    this.reportTextListener.remove();
  },

  _onChange: function () {
    this.setState({ documents: DocumentStore.all() });
    this.setState({ reportBodyText: ReportStore.bodyText() });
  },

  render: function () {
    var body;

    if (this.state.documents[0]) {
      body = this.state.documents[0].body;
    } else {
      body = "";
    };

    var upload = this.state.reportBodyText;

    return (
      <div className="dashboard">
        <NavBarContainer />
        <TypingInput sourceText={upload} />
        <InfoPane />
      </div>
    );
  }
});

module.exports = Dashboard;
