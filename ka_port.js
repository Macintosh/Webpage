$(document).ready(function() {
  var canvas = document.getElementById("my-drawing");
  new Processing(canvas, function(processing) {
    processing.draw = function() {
      processing.size(450,400);
      processing.noStroke();
      processing.background(0, 0, processing.random(100, 200));
      processing.fill(0, processing.random(0, 255), 0);
      processing.textSize(processing.random(30, 40));
      processing.text("CRACKA !", processing.random(113, 155), processing.random(90, 109));
      console.log("Ehhhh")
      processing.textSize(20);
      processing.text("BUY CRACKA FOR CHESE !", 85, 160);
      processing.text("CRACKA TASTE GOOD !", 100, 200);
      processing.fill(232, 220, 183);
      processing.rect(processing.random(131, 199), processing.random(226, 256), 100, 100);
      processing.fill(184, 174, 145);
      processing.rect(processing.random(299, 265), processing.random(301, 255), 70, 70);
      processing.fill(240, 232, 209);
      processing.rect(processing.random(75, 122), processing.random(226, 256), 50, 50);
    };
  });
});
