var Store = require('flux/utils').Store;

var Dispatcher = require('../dispatcher/Dispatcher');
var DocumentConstants = require('../constants/DocumentConstants');

var DocumentStore = new Store(Dispatcher);

var _documents = {};

function resetDocuments(newDocuments) {
  _documents = {};

  for (var i = newDocuments.length - 1; i >= 0; i--) {
    _documents[newDocuments[i].id] = newDocuments[i];
  }
}

DocumentStore.all = function () {
  var Documents = [];

  for (var id in _documents) {
    if (_documents.hasOwnProperty(id)) {
      Documents.push(_documents[id]);
    }
  }

  return Documents;
};

DocumentStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case DocumentConstants.DOCUMENTS_RECEIVED:
    resetDocuments(payload.documents);
    break;
  }

  DocumentStore.__emitChange();
};

module.exports = DocumentStore;
