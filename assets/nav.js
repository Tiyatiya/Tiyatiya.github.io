$(function() {
  var navId = null;
  if (location.pathname === "/mylittlehaven.html") {
    navId = "haven";
  } else if (location.pathname.substr(0, 5) === "/blog") {
    navId = "design";
  }
  if (navId) {
    $("#" + navId).addClass("active");
  }
});
