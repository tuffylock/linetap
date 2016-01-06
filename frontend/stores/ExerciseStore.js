var Store = require('flux/utils').Store;

var Dispatcher = require('../dispatcher/Dispatcher');
var ExerciseConstants = require('../constants/ExerciseConstants');

var ExerciseStore = new Store(Dispatcher);

var _currentExercise = {
  sourceText: '',
  typos: []
};

function setSourceText(newSourceText) {
  _currentExercise.sourceText = newSourceText;
}

function logTypo(typo) {
  _currentExercise.typos.push(typo);
}

ExerciseStore.sourceText = function () {
  return _currentExercise.sourceText;
};

ExerciseStore.typos = function () {
  return _currentExercise.typos;
};

ExerciseStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case ExerciseConstants.SOURCE_TEXT_RECEIVED:
    setSourceText(payload.sourceText);
    ExerciseStore.__emitChange();
    break;
  case ExerciseConstants.LOG_TYPO:
    logTypo(payload.typo);
    break;
  }

};

module.exports = ExerciseStore;
