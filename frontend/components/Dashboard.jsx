var React = require('react');

var ApiUtil = require('../util/ApiUtil');
var SourceStore = require('../stores/SourceStore');

var SourcesIndex = require('./SourcesIndex');
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
        <div className="source-pane">
          <SourcesIndex sources={this.state.sources} />
        </div>
        <div className="input-pane">
          <TypingInput source={body} />
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;