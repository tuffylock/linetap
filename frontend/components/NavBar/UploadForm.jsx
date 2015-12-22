var React = require('react');

var ReportActions = require('../../actions/ReportActions');

var UploadForm = React.createClass({
  getInitialState: function () {
    return { pasteText: '' }
  },

  onChange: function (e) {
    this.setState({ pasteText: e.currentTarget.value });
    ReportActions.updateBodyText(e.currentTarget.value);
  },

  render: function () {
    return (
      <form className="upload-form">
        <textarea autoFocus
          className="doc-paste"
          placeholder="Paste text here..."
          value={this.state.pasteText}
          onChange={this.onChange}
        ></textarea>
      </form>
    );
  }
});

module.exports = UploadForm;
