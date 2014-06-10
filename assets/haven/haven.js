$(function() {
  var retina = window.devicePixelRatio >= 1.5;
  var img = '/assets/haven/haven' + (retina ? '_2x.png' : '.png');
  $('#trigger').attr('src', img);
  $('#trigger').on('load', function() {
    $('.paused').removeClass('paused');
  });
});
