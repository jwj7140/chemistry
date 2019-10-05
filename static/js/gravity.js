var falls=Array();
function gravity(n) {
  var crash = [712, 0];
  var a;
  var b;
  falls[n] = 0;
  var delta = 30;
  var gravity = 5;
  setInterval (function() {
    if (move[n] == 0) {
      if (sprite[n].height+sprite[n].y>crash[0]) {
        move(n, 99999, crash[0]-sprite[n].height+1);
        falls[n]=0;
      } else {
        falls[n] = Math.min(10000, Math.max(-10000, falls[n] + gravity * delta / 100));
        move(n, 99999, sprite[n].y+falls[n]);
        if (n == 3) {
          console.log(falls[n]+ "2");
        }
      }
    }
    b=-1;
    for (a=0; a<sprite.length; a++) {
      if (sprite[n].x-sprite[a].x < sprite[a].width && sprite[n].x-sprite[a].x > -1*sprite[n].width) {
        if (sprite[n].y+sprite[n].height > sprite[a].y && sprite[n].y < sprite[a].y) {
          if (n != a) {
            b=a;
            crash[0] = sprite[a].y;
            break;
          }
        }
        if (sprite[a].y + sprite[a].height > sprite[n].y && sprite[a].y-sprite[a].height < sprite[n].y + sprite[n].height && sprite[n].y-sprite[a].y < sprite[a].height-30 && sprite[n].y-sprite[a].y > -1*sprite[n].height+30) {
          if (n != a) {
            console.log (n+"yp");
            if (move[n] == 0) {
              if (sprite[n].x > sprite[a].x) {        //왼쪽에서 밀림
                move(n, sprite[a].x+sprite[a].width, 99999);
              } else if (sprite[n].x < sprite[a].x) {   //오른쪽에서 밀림
                move(n, sprite[a].x-sprite[n].width, 99999);
              }
            }
            break;
          }
        }
      }
    }
    if (b != -1) {
    } else {
      crash[0] = 712;
    }
  }, 50)
}

function move (n, x, y) {
  if (x != 99999) {
    if (x>1903) {
      // console.log("way!1");
      // sprite.x = 1902-sprite.width;
    } else if (x<0) {
      // console.log("way!2");
      // sprite.x = 1;
    } else {
      sprite[n].x = x;
    }
  }
  if (y != 99999) {
    if (y>712) {
      // console.log("way!3");
      // sprite.y = 681-sprite.height;
    } else {
      sprite[n].y = y;
    }
  }
}
