$(document).ready(function () {

  var search = SW$().setPartner('airasia');

  $('#search-form').submit(function (event) {
    event.preventDefault();
    search.validate().buildParams().redirect();
    this.reset();
  });

  $('#destinations').on('change', function () {
    search.setDestination('#destinations').printErrorMessage('#error');
  });

  $('#start-date').on('change', function () {
    search.setStartDate('#start-date');
  });

  $('#end-date').on('change', function () {
    search.setEndDate('#start-date');
  });

});

