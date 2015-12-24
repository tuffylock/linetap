var Dispatcher = require('../dispatcher/Dispatcher');

var ReportConstants = require('../constants/ReportConstants');

var ReportActions = {
  updateSourceText: function (sourceText) {
    Dispatcher.dispatch({
      actionType: ReportConstants.SOURCE_TEXT_RECEIVED,
      sourceText: sourceText
    });
  }
};

module.exports = ReportActions;
