$(document).ready(function () {

  var search = SW$('', '', '', 'airasia');

  $('#search-form').submit(function (event) {
    event.preventDefault();
  });

  $('#destinations').on('change', function () {
    search.setDestination('#destinations');
  });

  $('#start-date').on('change', function () {
    search.setStartDate('#start-date');
  });

});

