var Dispatcher = require('../dispatcher/Dispatcher');

var SourceConstants = require('../constants/SourceConstants');

var ApiActions = {
  receiveAllSources: function (sources) {
    Dispatcher.dispatch({
      actionType: SourceConstants.SOURCES_RECEIVED,
      sources: sources
    });
  }
};

module.exports = ApiActions;
