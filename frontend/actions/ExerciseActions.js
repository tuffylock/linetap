var Dispatcher = require('../dispatcher/Dispatcher');

var ExerciseConstants = require('../constants/ExerciseConstants');

module.exports = {
  updateSourceText: function (sourceText) {
    Dispatcher.dispatch({
      actionType: ExerciseConstants.SOURCE_TEXT_RECEIVED,
      sourceText: sourceText
    });
  },

  logTypo: function (typo) {
    Dispatcher.dispatch({
      actionType: ExerciseConstants.LOG_TYPO,
      typo: typo
    });
  }
};
