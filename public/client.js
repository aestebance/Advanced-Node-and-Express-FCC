$(document).ready(function () {
  // Form submittion with new message in field with id 'm'
  /*global io*/
  let socket = io();
  $('form').submit(function () {
    var messageToSend = $('#m').val();

    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
});
