$(document).ready(function() {
  $('#example-1').ratings(10,3);
  //$('.jquery-ratings-star').unbind();
 
  $('#example-2').ratings(5).bind('ratingchanged', function(event, data) {
    $('#example-rating-2').text(data.rating);
  });
});
