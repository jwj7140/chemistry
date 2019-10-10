solid = Array();

//top
solid[0] = new PIXI.Graphics();
solid[0].beginFill(0xff0000);
solid[0].drawRect(0, 0, 1, 1);
solid[0].position.set(-600,-600);
//bottom
solid[1] = new PIXI.Graphics();
solid[1].beginFill(0xff0000);
solid[1].drawRect(0, 0, 1, 1);
solid[1].position.set(-600,-600);
//left
solid[2] = new PIXI.Graphics();
solid[2].beginFill(0xff0000);
solid[2].drawRect(0, 0, 1, 1);
solid[2].position.set(-600,-600);
//right
solid[3] = new PIXI.Graphics();
solid[3].beginFill(0xff0000);
solid[3].drawRect(0, 0, 1, 1);
solid[3].position.set(-600,-600);

function selector (n) {
  var state = document.getElementById('condition_body');

  //크기지정
  movesolid(0, 0, 0, sprite[n].width, 2);
  movesolid(1, 0, 0, sprite[n].width, 2);
  movesolid(2, 0, 0, 2, sprite[n].height);
  movesolid(3, 0, 0, 2, sprite[n].height);

  var border = setInterval (function () {
    movesolid(0, sprite[n].x, sprite[n].y, sprite[n].width, 2);
    movesolid(1, sprite[n].x, sprite[n].y+sprite[n].height, sprite[n].width, 2);
    movesolid(2, sprite[n].x, sprite[n].y, 2, sprite[n].height);
    movesolid(3, sprite[n].x+sprite[n].width, sprite[n].y, 2, sprite[n].height);
    if (select != n) {
      clearInterval(border);
    }

    state.innerHTML= `
      <h1>${sprite[n].rname}</h1>
      <img src="${sprite[n].imgad}" id="condition_img">
      <button type="button" name="button" id="delbutton" onmouseup="deletesprite ();">삭제하기</button>
      상태: ${sprite[n].condition}<br>
      온도: ${sprite[n].tem}<br>
      위치: x=${sprite[n].x}, y=${sprite[n].y}
    `
  }, 50)
}

function movesolid(n, x, y, width, height) {
  solid[n].x = x;
  solid[n].y = y;
  solid[n].width = width;
  solid[n].height = height;
}

// 0. 위치
// 1. 이름
// 2. 온도
// 3. 상태
// 4. 질량
// 5. 설명
