var falls=Array();
function gravity(n) {
  var crash;
  falls[n] = 0;
  var delta = 30;
  var gravity = 5;
  setInterval (function() {
    if (move[n] == 0) {
      if (sprite[n].height+sprite[n].y>682) {
        sprite[n].y = 683-sprite[n].height;
        falls[n]=0;
      } else {

        falls[n] = Math.min(10000, Math.max(-10000, falls[n] + gravity * delta / 100));
        sprite[n].y += falls[n];
      }
    }
  }, 50)
}
