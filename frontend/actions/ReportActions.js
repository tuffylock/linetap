var Dispatcher = require('../dispatcher/Dispatcher');

var ReportConstants = require('../constants/ReportConstants');

var ReportActions = {
  updateBodyText: function (bodyText) {
    Dispatcher.dispatch({
      actionType: ReportConstants.REPORT_BODY_TEXT_RECEIVED,
      bodyText: bodyText
    });
  }
};

module.exports = ReportActions;
