var Store = require('flux/utils').Store;

var Dispatcher = require('../dispatcher/Dispatcher');
var ReportConstants = require('../constants/ReportConstants');

var ReportStore = new Store(Dispatcher);

var _report = {
  bodyText: ''
};

function setBodyText(newBodyText) {
  _report.bodyText = newBodyText;
}

ReportStore.bodyText = function () {
  return _report.bodyText;
};

ReportStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case ReportConstants.REPORT_BODY_TEXT_RECEIVED:
    setBodyText(payload.bodyText);
    break;
  }

  ReportStore.__emitChange();
};

module.exports = ReportStore;
