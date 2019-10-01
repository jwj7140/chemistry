var mx,my;
document.onmousemove = function(e){
  mx=e.pageX;
  my=e.pageY;
}
var bid;
document.onmouseup = function() {
  clearInterval(bid);
}
var rxy = [-250, -300];
window.addEventListener('load', function() {
  var laboratory = document.getElementById("laboratory");
  var renderer = PIXI.autoDetectRenderer(1903, 682, {backgroundColor : 0x1099bb});
  laboratory.appendChild(renderer.view);
  // create the root of the scene graph
  var stage = new PIXI.Container();

  sprite = PIXI.Sprite.fromImage('a.png');

  sprite.position.set(100,0); //-250 -300
  sprite.interactive = true;
  sprite.on('mousedown', function(e) {
    var a;
    bid = setInterval(function() {
      // console.log('move!');
      // console.log(my+'px' + ':' + mx+'px');
      sprite.x = mx;
      sprite.y = my;
    console.log("sad");
    });
  })
  stage.addChild(sprite);
  // start animating
  animate();

  function animate() {
      requestAnimationFrame(animate);
      // render the root container
      renderer.render(stage);
  }
});
