var falls=Array();
function gravity(n) {
  var crashy = 682;
  var a;
  var b;
  falls[n] = 0;
  var delta = 30;
  var gravity = 5;
  setInterval (function() {
    if (move[n] == 0) {
      if (sprite[n].height+sprite[n].y>crashy) {
        sprite[n].y = crashy-sprite[n].height;
        falls[n]=0;
      } else {
        b=-1;
        for (a=0; a<sprite.length; a++) {
          if (sprite[n].x-sprite[a].x < sprite[a].width && sprite[n].x-sprite[a].x > -1*sprite[n].width) {
            if (sprite[n].x-sprite[a].x < sprite[a].width && sprite[n].x-sprite[a].x > -1*sprite[n].width) {
              if (n != a) {
                b=a;
                crashy = sprite[a].y;
                console.log ("safe");
                break;
              }
            }
          }
        }
        if (b != -1) {
        } else {
          crashy = 682;
        }
        falls[n] = Math.min(10000, Math.max(-10000, falls[n] + gravity * delta / 100));
        sprite[n].y += falls[n];
      }
    }
    console.log(crashy);
  }, 50)
}
