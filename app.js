$(document).ready(function () {

  var search = SW$().setPartner('airasia');

  $('#search-form').submit(function (event) {
    event.preventDefault();
    search.validate().redirect();
  });

  $('#destinations').on('change', function () {
    search.setDestination('#destinations');
  });

  $('#start-date').on('change', function () {
    search.setStartDate('#start-date');
  });

  $('#end-date').on('change', function () {
    search.setEndDate('#start-date');
  });

});

