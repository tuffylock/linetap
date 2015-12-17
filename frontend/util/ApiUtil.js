var ApiActions = require('../actions/ApiActions');

var ApiUtil = {
  fetchAllSources: function () {
    $.ajax({
      url: 'api/sources',
      success: function (sources) {
        ApiActions.receiveAllSources(sources);
      }
    });
  }
};

module.exports = ApiUtil;
