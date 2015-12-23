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

  prefill: function (e) {
    e.preventDefault();
    ReportActions.updateBodyText("In fact, wrong notes always have a cause. An immediate physical cause. Just before you play a wrong note, your fingers were in a position that made that wrong note inevitable. Fixing wrong notes isn't about 'practicing harder' but about trying to unkink those systematically error-causing fingerings and hand motions.");
  },

  render: function () {
    return (
      <form className="upload-form">
        <h3 style={{color: 'darkred'}}>Upload practice material here: </h3>
        <textarea autoFocus
          className="doc-paste"
          placeholder="Paste text here..."
          value={this.state.pasteText}
          onChange={this.onChange}
        ></textarea>
        <h3>OR</h3>
        <button onClick={this.prefill}>use demo text</button>
      </form>
    );
  }
});

module.exports = UploadForm;
