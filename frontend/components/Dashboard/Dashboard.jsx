var React = require('react');

var ApiUtil = require('../../util/ApiUtil');
var SourceStore = require('../../stores/SourceStore');

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
        <div className="input-pane">
          <TypingInput source={body} />
        </div>
        <div className="info-pane">
          <p>LineTap establishes and corrects accurate typing patterns by treating words, sentences, or lines as full units. Typos take you to the beginning of a segment instead of allowing backspace or only accounting for mistakes during accuracy calculations; bad habits are remedied, not just treated.</p>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
