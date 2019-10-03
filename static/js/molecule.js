var move = Array();
var count = 0;
var sprite = Array();
var mx,my;
document.onmousemove = function(e){
  mx=e.pageX;
  my=e.pageY;
}
var bid;
document.onmouseup = function() {
  var a, b=-1;
  clearInterval(bid);
  bid=0;
  for (a=0; a<move.length; a++) {
    if (move[a] == 1) {
      move[a] = 0;
    }
  }
}

function create(Json) {
  var a = count;
  move[a] = 0
  sprite[count] = PIXI.Sprite.fromImage(`static/img/${Json.종류}/${Json.이름}.png`);
  sprite[count].position.set(100,200); //-250 -300
  sprite[count].interactive = true;
  sprite[count].on('mousedown', function() {
    clickmovesp(a);
    falls[a] = 0;
    move[a] = 1;
  });
  sprite
  gravity(count);
  console.log(count);
  count++;
}
function clickmovesp (a) {
  if (bid == 0) {
    bid = setInterval(function() {
      if (sprite[a].width/2+mx>1903) {
        console.log("way!1");
        // sprite.x = 1902-sprite.width;
      } else if (mx-sprite[a].width/2<0) {
        console.log("way!2");
        // sprite.x = 1;
      } else {
        sprite[a].x = mx-sprite[a].width/2;
      }
      if (sprite[a].height/2+my>712) {
        console.log("way!3");
        // sprite.y = 681-sprite.height;
      } else if (my-sprite[a].height/2<0) {
        console.log("way!4");
        // sprite.y = 1;
      } else {
        sprite[a].y = my-sprite[a].height/2;
      }
    });
  }
}

window.addEventListener('load', function() {
  var a;
  var laboratory = document.getElementById("laboratory");
  var renderer = PIXI.autoDetectRenderer(1903, 712, {backgroundColor : 0x1099bb});
  laboratory.appendChild(renderer.view);
  // create the root of the scene graph
  var stage = new PIXI.Container();
  // start animating
  animate();
  function animate() {
    if (sprite.length > 0) {
      for (a=0; a<sprite.length; a++) {
        stage.addChild(sprite[a]);
      }
    }
    requestAnimationFrame(animate);
    // render the root container
    renderer.render(stage);
  }
});
