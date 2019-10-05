var falls=Array();
function gravity(n) {
  var crash = 712;
  var a;
  var b;
  falls[n] = 0;
  var delta = 30;
  var gravity = 5;
  setInterval (function() {
    if (move[n] == 0) {                             /*10 ~ 21 마우스로 이동중이 아니라면*/
      if (sprite[n].height+sprite[n].y>crash) {      /*11 ~ 14 충돌위치에 정치했다면*/
        move(n, 99999, crash-sprite[n].height+1);  /*y 좌표를 충돌위치로 이동*/
        falls[n]=0;
      } else {  /*14 ~ 20 움직이고 있다면*/
        falls[n] = Math.min(10000, Math.max(-10000, falls[n] + gravity * delta / 100)); /*현재위치에 가속도 붙여서 내림*/
        move(n, 99999, sprite[n].y+falls[n]);   /*falls적용해서 이동*/
      }
    }
    b=-1;
    for (a=0; a<sprite.length; a++) {
      if (sprite[n].x-sprite[a].x < sprite[a].width && sprite[n].x-sprite[a].x > -1*sprite[n].width) { /*n요소와 a요소의 x좌표가 가깝다면*/
        if (n == 1) {
          console.log(a);
        }
        if (sprite[n].y+sprite[n].height > sprite[a].y && sprite[n].y < sprite[a].y) {  /*22 ~ 28 n의 위치가  a의 위치 바로 밑에 있다면*/
          if (n != a) {
            b=a;
            crash = sprite[a].y;    /*y의 충돌점 변경*/
          }
        }
        if (sprite[a].y + sprite[a].height > sprite[n].y && sprite[a].y-sprite[a].height < sprite[n].y + sprite[n].height && sprite[n].y-sprite[a].y < sprite[a].height-30 && sprite[n].y-sprite[a].y > -1*sprite[n].height+30) {
          /*29줄: 약간의 뻘짓이 들어있는 x쪽 충돌기준(y)*/
          if (n != a) {
            console.log (n+"yp");
            if (move[n] == 0) {
              if (sprite[n].x > sprite[a].x) {        //왼쪽에서 밀림
                move(n, sprite[a].x+sprite[a].width, 99999);
              } else if (sprite[n].x < sprite[a].x) {   //오른쪽에서 밀림
                move(n, sprite[a].x-sprite[n].width, 99999);
              }
            }
          }
        }
      }
    }
    if (b != -1) {          /*y가 아무데도 충돌하지 않았다면*/
    } else {
      crash = 712;   /*떨어지는 곳을 바닥으로 지정*/
    }
  }, 50)
}

function move (n,x,y) {         /*52 ~ 72 요소 이동 함수*/
  if (x != 99999) {
    if (x+sprite[n].width>1903) {
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
    if (y<0) {
      // console.log("way!2");
      // sprite.x = 1;
    } else {
      sprite[n].y = y;
    }
  }
}
