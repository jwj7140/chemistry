var xcrash = Array();
var ycrash = Array();
var aycrash = Array();
var falls=Array();
var al = Array();

function gravity(n) {
  ycrash[n] = 826;
  aycrash[n] = ycrash[n];
  var a;
  var b= -1;
  var c= 0;
  var d = 0;
  falls[n] = 0;
  var delta = 30;
  var gravity = 5;
  setInterval (function() {
    if (move[n] == 0) {                             /*10 ~ 21 마우스로 이동중이 아니라면*/
      if (al[n] == 0) {                             //액체일 경우



        if (sprite[n].height+sprite[n].y>ycrash[n]) {      /*11 ~ 14 충돌위치에 정치했다면*/
          move(n, 99999, ycrash[n]-sprite[n].height+1);  /*y 좌표를 충돌위치로 이동*/
          falls[n]=0;
        } else {  /*14 ~ 20 움직이고 있다면*/
          falls[n] = Math.min(90, Math.max(-90, falls[n] + gravity * delta / 100)); /*현재위치에 가속도 붙여서 내림*/

          move(n, 99999, sprite[n].y+falls[n]);   /*falls적용해서 이동*/
        }



      } else {                                    //기체일 경우



        if (sprite[n].y<ycrash[n] || sprite[n].y==ycrash[n]) {      /*11 ~ 14 충돌위치에 정치했다면*/
          move(n, 99999, ycrash[n]+1);  /*y 좌표를 충돌위치로 이동*/
          falls[n]=0;
        } else {  /*14 ~ 20 움직이고 있다면*/
          falls[n] = Math.min(100, Math.max(-100, falls[n] + gravity * delta / 1000)); /*현재위치에 가속도 붙여서 내림*/

          move(n, 99999, sprite[n].y-falls[n]);   /*falls적용해서 이동*/
        }



      }
    }

    if (sprite[n].tem > 100  && n == water[water.indexOf(n)]) {     //수중기 변화부분
      var vapor = PIXI.Texture.fromImage('static/img/molecule/water-a.png');
      sprite[n].setTexture(vapor);
      al[n] = 1;
      sprite[n].condition = "기체";
    } else if (sprite[n].tem < 100  && n == water[water.indexOf(n)]) {
      var l = PIXI.Texture.fromImage('static/img/molecule/water.png');
      sprite[n].setTexture(l);
      al[n] = 0;
      sprite[n].condition = "액체";
    }

      b=-1;
      for (a=0; a<sprite.length; a++) {
        if (sprite[n].x-sprite[a].x < sprite[a].width && sprite[n].x-sprite[a].x > -1*sprite[n].width) { /*n요소와 a요소의 x좌표가 가깝다면*/

          if (al[n] == 0) {



            if (sprite[n].y+sprite[n].height > sprite[a].y && sprite[n].y < sprite[a].y) {  /*22 ~ 28 n의 위치가  a의 위치 바로 위에 있다면*/
              if (n == water[water.indexOf(n)] && a == beaker[beaker.indexOf(a)]) {
              } else
              if (n == beaker[beaker.indexOf(n)] && a == water[water.indexOf(a)]) {
                    // if (n != a) {
                    //   b=a;
                    //   ycrash[n] = sprite[a].y+15;    /*y의 충돌점 변경*/
                    // }
              } else
              if (sprite[a].tem < 100) {
                if (n != a) {
                  b=1;
                  if (move[n] == 0) {
                    aycrash[n] = ycrash[n];
                  }
                  ycrash[n] = sprite[a].y;    /*y의 충돌점 변경*/
                }
              }
            } else {
              if (sprite[a].y + sprite[a].height > sprite[n].y && sprite[a].y-sprite[a].height < sprite[n].y + sprite[n].height && sprite[n].y-sprite[a].y < sprite[a].height-30 && sprite[n].y-sprite[a].y > -1*sprite[n].height+30) {
                /*29줄: 약간의 뻘짓이 들어있는 x쪽 충돌기준(y)*/
                if (n == water[water.indexOf(n)] && a == beaker[beaker.indexOf(a)]) {
                } else
                if (n == beaker[beaker.indexOf(n)] && a == water[water.indexOf(a)]) {
                } else
                if (n != water[water.indexOf(n)] || a != beaker[beaker.indexOf(a)]) {
                  if (n != a) {
                    if (move[n] == 0) {
                      if (sprite[n].x > sprite[a].x) {        //왼쪽에서 밀림
                        move(n, sprite[a].x+sprite[a].width, 99999);
                      } else if (sprite[n].x < sprite[a].x) {   //오른쪽에서 밀림
                        move(n, sprite[a].x-sprite[n].width, 99999);
                      }
                      xcrash[n] = 1;
                    }
                  } else {
                    xcrash[n] = 0;
                  }
                } else {
                  xcrash[n] = 0;
                }
              }
            }




          } else {



            if (sprite[n].y < sprite[a].y+sprite[a].height && sprite[n].y > sprite[a].y && al[a] == 1) {  /*22 ~ 28 n의 위치가  a의 위치 바로 밑에 있다면*/
              if (n == water[water.indexOf(n)] && a == water[water.indexOf(a)] && al[water.indexOf(a)]) {
                if (n != a) {
                  b=1;
                  if (move[n] == 0) {
                    aycrash[n] = ycrash[n];
                  }
                  ycrash[n] = sprite[a].y+sprite[a].height;    /*y의 충돌점 변경*/
                }
              }
            } else {
              if (sprite[a].y < sprite[n].y-sprite[n].height && sprite[a].y+sprite[a].height*2 > sprite[n].y && sprite[n].y-sprite[a].y < sprite[a].height-30 && sprite[n].y-sprite[a].y > -1*sprite[n].height+30) {
                /*29줄: 약간의 뻘짓이 들어있는 x쪽 충돌기준(y)*/
                if (n == water[water.indexOf(n)] && a == beaker[beaker.indexOf(a)]) {
                } else
                if (n == beaker[beaker.indexOf(n)] && a == water[water.indexOf(a)]) {
                } else
                if (n != water[water.indexOf(n)] || a != beaker[beaker.indexOf(a)]) {
                  if (n != a) {
                    if (move[n] == 0) {
                      if (sprite[n].x > sprite[a].x) {        //왼쪽에서 밀림
                        move(n, sprite[a].x+sprite[a].width, 99999);
                      } else if (sprite[n].x < sprite[a].x) {   //오른쪽에서 밀림
                        move(n, sprite[a].x-sprite[n].width, 99999);
                      }
                      xcrash[n] = 1;
                    }
                  } else {
                    xcrash[n] = 0;
                  }
                } else {
                  xcrash[n] = 0;
                }
              }
            }





          }
        }

        if (sprite[n].x > sprite[a].x && sprite[n].x+sprite[n].width < sprite[a].x+sprite[a].width  && sprite[n].y > sprite[a].y && sprite[n].y+sprite[n].height-30 < sprite[a].y+sprite[a].height    && n == water[water.indexOf(n)] && a == beaker[beaker.indexOf(a)]) {
          //비커속 물 파트
          if (al[n] == 0) {
            b = 1;
            ycrash[n] = sprite[a].y + sprite[a].height-30;
            if (move[n] == 0) {
              aycrash[n] = ycrash[n];
            }
            if (sprite[n].x-sprite[a].x < 30) {
              move(n, sprite[a].x + 30, 99999);
            }
            if (sprite[a].x+sprite[a].width - sprite[n].x+sprite[n].width < 80) {
              move(n, sprite[n].width + sprite[a].x + sprite[a].width-80, 99999);
            }
          }
        }
      }

      if (b != -1) {          /*y가 아무데도 충돌하지 않았다면*/
      } else {
        if (al[n] == 0) {
          aycrash[n] = ycrash[n];
          ycrash[n] = 826;   /*떨어지는 곳을 바닥으로 지정*/
        } else {
          aycrash[n] = ycrash[n];
          ycrash[n] = 0;   /*떨어지는 곳을 바닥으로 지정*/
        }
      }
      if (aycrash[n] != ycrash[n] && move[n] == 0 && n == water[water.indexOf(n)]) {
        flow(n);
      }

      c++;
      if (c % 20 == 0) {
        c=0;
        if (sprite[n].tem > backtem) {
          sprite[n].tem -= 1.5;
        } else {
          sprite[n].tem = backtem;
        }
      }
  }, 50)
}

function flow (n) {
  if (sprite[n].tem-100 > 0 && sprite[n].tem-100 < 0.8 && sprite[n].tem > 100)  {

  } else {
    var ar = Math.floor(Math.random() * 2);
    var dis = sprite[n].width;
    var flows;
    flows = setInterval (function() {
      dis -= 3;
      if (ar == 0) {
        move(n, sprite[n].x-3, 99999);
      } else if (ar == 1) {
        move(n, sprite[n].x+3, 99999);
      }

      if (xcrash[n] == 1) {
        clearInterval(flows);
      }
      else if (dis < 1) {
        clearInterval(flows);
      }
      else if (aycrash[n] != ycrash[n] && move[n] == 0) {
        clearInterval(flows);
      }
      else if (sprite[n].x-3 <0 ) {
        clearInterval(flows);
      }
      else if (sprite[n].x+3 > 2114) {
        clearInterval(flows);
      }
    }, 50);
  }
}

function move (n,x,y) {         /*52 ~ 72 요소 이동 함수*/
  if (x != 99999) {
    if (x+sprite[n].width>2114) {
      sprite[n].x  = 2114-sprite[n].width;
      // console.log("way!1");
      // sprite.x = 1902-sprite.width;
    } else if (x<0) {
      sprite[n].x  = 0;
      // console.log("way!2");
      // sprite.x = 1;
    } else {
    sprite[n].x = x;
    }
  }
  if (y != 99999) {
    if (y+sprite[n].height>826) {
      sprite[n].y  = 826-sprite[n].height;
    } else if (y<0) {
      sprite[n].y = 0;
      // console.log("way!2");
      // sprite.x = 1;
    } else {
      sprite[n].y = y;
    }
  }
}
