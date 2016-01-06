var React = require('react');

var ExerciseActions = require('../../../actions/ExerciseActions');

module.exports = React.createClass({
  getInitialState: function () {
    return { pasteText: '' }
  },

  onChange: function (e) {
    this.setState({ pasteText: e.currentTarget.value });
    ExerciseActions.updateSourceText(e.currentTarget.value);
  },

  prefill: function (e) {
    e.preventDefault();
    ExerciseActions.updateSourceText("\"In fact, wrong notes always have a cause. An immediate physical cause. Just before you play a wrong note, your fingers were in a position that made that wrong note inevitable. Fixing wrong notes isn't about 'practicing harder' but about trying to unkink those systematically error-causing fingerings and hand motions.\"");
  },

  render: function () {
    return (
      <form className="upload-form">
        <div className="upload-form-inset" />

        <div className="doc-paste">
          <div className="doc-paste-shadow" />
          <textarea autoFocus
            className="doc-paste-input"
            placeholder="Paste text here..."
            value={this.state.pasteText}
            onChange={this.onChange}
          ></textarea>
        </div>

        <button className="demo-text-button" onClick={this.prefill}>Or Use Demo Text</button>
      </form>
    );
  }
});
