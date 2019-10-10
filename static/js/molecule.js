var select;
var move = Array();
var count = 0;
var sprite = Array();
var mx,my;
document.onmousemove = function(e){                 /*마우스의 좌표 감지*/
  mx=e.pageX;
  my=e.pageY;
}
var bid;
document.onmouseup = function() {                   /*10 ~ 19 요소를 마우스로 이동하고 이동을 정지시킬때*/
  var a;
  clearInterval(bid);
  bid=0;
  for (a=0; a<count; a++) {
    move[a] = 0;
  }
}

function create(Json) {                 /*21 ~ 36 laboratory에서 요소를 생성하는 함수*/
  var a = count;
  move[a] = 0;
  xcrash[a] = 0;
  sprite[a] = PIXI.Sprite.fromImage(`static/img/${Json.종류}/${Json.이름}.png`);  /*24 ~ 31 pixi.js로 캔버스에 요소 생성*/
  sprite[a].position.set(100,200);
  sprite[a].interactive = true;
  sprite[a].rname = Json.이름;
  sprite[a].imgad = `static/img/${Json.종류}/${Json.이름}.png`;
  al[a] = 0;
  sprite[a].on('mousedown', function() {          /*요소를 클릭하면 이동시킴*/
    clickmovesp(a);
    select = a;
    selector(a);
    falls[a] = 0;
    move[a] = 1;
  });
  if (Json.이름 == "beaker") {
    sprite[a].condition = "고체";
    createbeaker(a);
  } else if (Json.이름 == "water") {
    sprite[a].scale.x  = 0.9;
    sprite[a].scale.y  = 0.9;
    sprite[a].condition = "액체";
    sprite[a].tem = backtem;
    createwater(a);
  } else if (Json.이름 == "burner") {
    sprite[a].condition = "고체";
    createburner(a);
    sprite[a].on('click', function() {
        burnerswitch(a);
    });
  }
  count++;
  gravity(a);                                   /*83 ~ 90 요소에 중력 적용*/
}

function clickmovesp (a) {                     /*37 ~ 43 마우스로 클릭하면 move함수로 마우스 위치로 요소이동*/
  if (bid == 0) {
    bid = setInterval(function() {
      move(a, mx-sprite[a].width/2, my-sprite[a].height/2);
    });
  }
}

// var back = PIXI.Sprite.fromImage(`static/img/back.png`);
// back.position.set(0,0);
// back.interactive = true;

window.addEventListener('load', function() {
  var a;
  var laboratory = document.getElementById("laboratory");
  var renderer = PIXI.autoDetectRenderer(2114, 826, {backgroundColor : 0x87cefa});  /*캔버스 생성*/
  laboratory.appendChild(renderer.view);     /*laboratory에 추가*/
  // create the root of the scene graph
  var stage = new PIXI.Container();
  // start animating
  animate();
  function animate() {                    /*54 ~ 63 애니메이션 함수*/
    // stage.addChild(back);
    if (sprite.length > 0) {
      for (a=0; a<sprite.length; a++) {
        if (sprite[a] == 0) {
          a++;
        }
        stage.addChild(sprite[a]);        /*반복문으로 요소 전체 애니메이션*/
      }
    }
    if (solid.length > 0) {
      for (a=0; a<solid.length; a++) {
        stage.addChild(solid[a]);        /*반복문으로 요소 전체 애니메이션*/
      }
    }
    requestAnimationFrame(animate);
    // render the root container
    renderer.render(stage);
  }
});
