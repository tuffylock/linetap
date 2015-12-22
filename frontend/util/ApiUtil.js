var ApiActions = require('../actions/ApiActions');

var ApiUtil = {
  fetchAllDocuments: function () {
    $.ajax({
      url: 'api/documents',
      success: function (documents) {
        ApiActions.receiveAllDocuments(documents);
      }
    });
  }
};

module.exports = ApiUtil;
