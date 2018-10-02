$(document).ready(function() {
  $('#showfiliales').click(function() {
    var $filiales = $('#filiales')
    if($filiales.css('display') === "block") {
      $filiales.addClass('d-none')
    } else {
      $filiales.removeClass('d-none')
    }
  })
})
