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
    validateDestination: function () {
      console.log('validate destination');
    },

    validateStartDate: function () {
      console.log('validate startDate');
    },

    validateEndDate: function () {
      console.log('validate endDate');
    },

    validatePartner: function () {
      if (supportedDomains.indexOf(this.partnerName) === -1) {
        throw 'Unsupported partner';
      }
    },

    validate: function () {
      this.validateDestination();
      this.validateStartDate();
      this.validateEndDate();
      this.validatePartner();
      return this;
    },

    setDestination: function(dest) {
      this.destination = dest;
      this.validateDestination();
      return this;
    },

    setStartDate: function(start) {
      this.startDate = start;
      this.validateStartDate();
      return this;
    },

    setEndDate: function(start) {
      this.endDate = start;
      this.validateEndDate();
      return this;
    },

    setPartner: function (partner) {
      this.partnerName = partner;
      this.validatePartner();
      return this;
    },

    redirect: function (event) {
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
