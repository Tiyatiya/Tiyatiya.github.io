$(function() {
  var retina = window.devicePixelRatio >= 1.5;
  // var img = '/assets/haven/haven' + (retina ? '_2x.png' : '.png');
  var img = '/assets/haven/haven.png';
  $('#trigger').attr('src', img);
  $('#trigger').on('load', function() {
    $('.paused').removeClass('paused');
  });
});
