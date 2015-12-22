var React = require('react');

var ReportActions = require('../../actions/ReportActions');

var UploadForm = React.createClass({
  render: function () {
    return (
      <form className="upload-form">
        <textarea>
        </textarea>
      </form>
    );
  }
});

module.exports = UploadForm;
