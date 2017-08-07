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
      if (this.destination === null) {
        throw 'Destination is empty';
      }
    },

    validateStartDate: function () {
      if (this.startDate === '') {
        throw 'Start date is empty';
      }
    },

    validateEndDate: function () {
      if (this.endDate === '') {
        throw 'End date is empty';
      }
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

    setDestination: function(selector) {
      this.destination = $(selector).val();
      this.validateDestination();
      return this;
    },

    setStartDate: function(selector) {
      this.startDate = $(selector).val();
      this.validateStartDate();
      return this;
    },

    setEndDate: function(selector) {
      this.endDate = $(selector).val();
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
