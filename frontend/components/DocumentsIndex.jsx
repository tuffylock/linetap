var React = require('react');

var DocumentIndex = React.createClass({
  render: function () {
    documents = this.props.documents.map(function (document) {
      return <li key={document.id}>
              <h3>{document.title}</h3>
              <p>{document.body}</p>
            </li>
    });

    return (
      <div>

      </div>
    );
  }
});

module.exports = DocumentIndex;
