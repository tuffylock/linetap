var Store = require('flux/utils').Store;

var Dispatcher = require('../dispatcher/Dispatcher');
var ReportConstants = require('../constants/ReportConstants');

var ReportStore = new Store(Dispatcher);

var _report = {
  sourceText: ''
};

function setSourceText(newSourceText) {
  _report.sourceText = newSourceText;
}

ReportStore.sourceText = function () {
  return _report.sourceText;
};

ReportStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case ReportConstants.SOURCE_TEXT_RECEIVED:
    setSourceText(payload.sourceText);
    break;
  }

  ReportStore.__emitChange();
};

module.exports = ReportStore;
