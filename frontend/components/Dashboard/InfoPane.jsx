var React = require('react');

var InfoPane = React.createClass({
  render: function () {
    return (
      <div className="info-pane">
        proto-typist establishes and corrects accurate typing patterns by treating words, sentences, or lines as full units. Typos take you to the beginning of a segment instead of allowing backspace or only accounting for mistakes during accuracy calculations; bad habits are remedied, not just acknowledged.
      </div>
    );
  }
});

module.exports = InfoPane;
