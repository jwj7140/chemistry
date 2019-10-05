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
  move[a] = 0;
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
      move(a, mx-sprite[a].width/2, my-sprite[a].height/2);
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
