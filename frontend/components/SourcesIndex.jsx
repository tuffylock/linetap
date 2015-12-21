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
        <p><a href="https://github.com/tuffylock/linetap">linetap#github</a></p>
        <p><a href="https://linetap.herokuapp.com/">linetap#heroku</a></p>
        <p>login</p>
        <p>stats</p>
        <p>feedback</p>
      </div>
    );
  }
});

module.exports = SourcesIndex;
