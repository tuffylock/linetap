var React = require('react');

var SourcesIndex = React.createClass({
  render: function () {
    sources = this.props.sources.map(function (source) {
      return <li key={source.id}>
              <h3>{source.title}</h3>
              <p>{source.body}</p>
            </li>
    });

    return (
      <div>

      </div>
    );
  }
});

module.exports = SourcesIndex;
