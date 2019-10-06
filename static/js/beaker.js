var bc = 0;
var wc = 0;

function createbeaker (a) {
  beaker[bc] = a;
  bc+=1;


  // var n = [count, count+1, count+2, count+3, count+4];
  // count += 5;
  // sprite[n[0]] = new PIXI.Graphics();
  // sprite[n[0]].beginFill(0xff0000);
  // sprite[n[0]].drawRect(0, 0, 2, 160);
  // black[n[0]] = 0;
  // sprite[n[1]] = new PIXI.Graphics();
  // sprite[n[1]].beginFill(0xff0000);
  // sprite[n[1]].drawRect(0, 0, 2, 35);
  // sprite[n[1]].rotation = -10.03;
  // black[n[1]] = 0;
  // sprite[n[2]] = new PIXI.Graphics();
  // sprite[n[2]].beginFill(0xff0000);
  // sprite[n[2]].drawRect(0, 0, 2, 160);
  // black[n[2]] = 0;
  // sprite[n[3]] = new PIXI.Graphics();
  // sprite[n[3]].beginFill(0xff0000);
  // sprite[n[3]].drawRect(0, 0, 2, 30);
  // sprite[n[3]].rotation = 9.7;
  // black[n[3]] = 0;
  // sprite[n[4]] = new PIXI.Graphics();
  // sprite[n[4]].beginFill(0xff0000);
  // sprite[n[4]].drawRect(0, 0, 160, 2);
  // black[n[4]] = 0;
  // setInterval(function() {
  //   move(n[4], sprite[a].x+20, sprite[a].y+sprite[a].height-3);
  //   move(n[0], sprite[a].x+21, sprite[a].y+48); //21,
  //   move(n[1], sprite[a].x+24, sprite[a].y+50);
  //   move(n[2], sprite[a].x+sprite[a].width-10, sprite[a].y+48); //21,
  //   move(n[3], sprite[a].x+sprite[a].width-10, sprite[a].y+44);
  // }, 25);
}

function createwater(a) {
  water[wc] = a;
  wc+=1;
}
