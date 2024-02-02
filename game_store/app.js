var isDragging = false;
var startX;
var scrollLeft;

document.addEventListener("mousedown", function (e) {
  var target = e.target.closest(".scroll, .scrollrow");

  if (!target) return;

  isDragging = true;
  startX = e.pageX - target.offsetLeft;
  scrollLeft = target.scrollLeft;
});

document.addEventListener("mouseup", function () {
  isDragging = false;
});

document.addEventListener("mousemove", function (e) {
  if (!isDragging) return;

  var target = e.target.closest(".scroll, .scrollrow");

  if (!target) return;

  var x = e.pageX - target.offsetLeft;
  var walk = (x - startX) * 2;
  target.scrollLeft = scrollLeft - walk;
});
