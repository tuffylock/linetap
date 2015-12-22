var React = require('react');

var ApiUtil = require('../../util/ApiUtil');
var SourceStore = require('../../stores/SourceStore');

var InfoPane = require('./InfoPane');
var TypingInput = require('./TypingInput');


var Dashboard = React.createClass({
  getInitialState: function () {
    return { sources: SourceStore.all() };
  },

  componentDidMount: function () {
    this.onChangeListener = SourceStore.addListener(this._onChange);
    ApiUtil.fetchAllSources();
  },

  componentWillUnmount: function () {
    this.onChangeListener.remove();
  },

  _onChange: function () {
    this.setState({ sources: SourceStore.all() });
  },

  render: function () {
    var body;

    if (this.state.sources[0]) {
      body = this.state.sources[0].body;
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
