$(function() {
  var active = -1;
  var delay = 3000
  var interval = 10000;

  var keyframes = [
    [1, 80],
    [2, 80],
    [3, 80],
    [2, 80],
    [1, 80]
  ];

  function setFrame(idx) {
    var frame = keyframes[idx];
    for (var i = 1; i <= 3; i++) {
      var divId = "#wings" + i;
      $(divId).toggle(i === frame[0]);
    }
    if (idx + 1 < keyframes.length) {
      setTimeout(function() {setFrame(idx + 1)}, frame[1]);
    } else {
      setTimeout(function() {setFrame(0)}, interval);
    }
  }
  setTimeout(function() {setFrame(0)}, delay);
});
