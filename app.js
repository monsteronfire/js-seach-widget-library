$(document).ready(function () {

  $('#search-form').submit(function (event) {
    event.preventDefault();
    var search = SW$('Kuala Lumpur', '2017-10-10', '2017-11-11', 'airasia');
    console.log($('#destinations').val());
    console.log($('#start-date').val());
    console.log($('#end-date').val());
    search.validate().redirect();
  });

});

