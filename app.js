$(document).ready(function () {

  $('#submit').click(function (event) {
    event.preventDefault();
    var search = SW$('Kuala Lumpur', '2017-10-10', '2017-11-11', 'airasia');
    search.redirect();
  });

});

