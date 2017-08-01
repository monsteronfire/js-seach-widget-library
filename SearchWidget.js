(function(global, $) {

  var SearchWidget = function(destination, startDate, endDate, partnerName) {
    return new SearchWidget.init(destination, startDate, endDate, partnerName);
  };

  var supportedDomains = [
    'default',
    'airasia',
    'tunehotels'
  ];

  SearchWidget.prototype = {

    validate: function () {
      if (supportedDomains.indexOf(this.partnerName) === -1) {
        throw 'Unsupported partner';
      }
    },

    setPartner: function (partner) {
      this.partnerName = partner;
      this.validate();
      return this;
    }

  };

  SearchWidget.init = function(destination, startDate, endDate, partnerName) {
    var self = this;
    self.destination = destination || '';
    self.startDate = startDate || '';
    self.endDate = endDate || '';
    self.partnerName = partnerName || 'default';
    self.validate();
  };

  SearchWidget.init.prototype = SearchWidget.prototype;

  global.SearchWidget = global.SW$ = SearchWidget;

})(window, jQuery);

// Todo
// form validation
// partnerUrls stored in object
// get url parameters
// redirectdomain
// print error messages
// redirect to redirectdomain
// clear form after submission, clear error messages on change
