var Store = require('flux/utils').Store;

var Dispatcher = require('../dispatcher/Dispatcher');
var SourceConstants = require('../constants/SourceConstants');

var SourceStore = new Store(Dispatcher);

var _sources = {};

function resetSources(newSources) {
  _sources = {};

  for (var i = newSources.length - 1; i >= 0; i--) {
    _sources[newSources[i].id] = newSources[i];
  }
}

SourceStore.all = function () {
  var sources = [];

  for (var id in _sources) {
    if (_sources.hasOwnProperty(id)) {
      sources.push(_sources[id]);
    }
  }

  return sources;
};

SourceStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case SourceConstants.SOURCES_RECEIVED:
    resetSources(payload.sources);
    break;
  }

  SourceStore.__emitChange();
};

module.exports = SourceStore;
