var burners = Array();
var burner = Array();
var burnerc = 0;
var z = Array()

function createburner (n) {
  burner[burnerc] = n;
  burnerswitch[burnerc] = 0;
  burnerc++;
}

function burnerswitch (l) {
  var texture_on = PIXI.Texture.fromImage('static/img/tool/burner-on.png');
  var texture_off = PIXI.Texture.fromImage('static/img/tool/burner.png');
  var bn = burners.indexOf(l);
  if (burners[bn] == 0) {
    burners[bn] = 1;
    burneron(l, bn);
    sprite[l].setTexture(texture_on);
  } else {
    burners[bn] = 0;
    sprite[l].setTexture(texture_off);
  }
}

function burneron(l, bn) {
  var burnerfor;
  var g;
  burnerfor = setInterval(function () {
    for (g=0; g<water.length; g++) {
      if (sprite[water[g]].y+sprite[water[g]].height < sprite[l].y+50) {
        if (sprite[water[g]].y > sprite[l].y-120) {
          if (sprite[water[g]].x > sprite[l].x-40) {
            if (sprite[water[g]].x+sprite[water[g]].width < sprite[l].x+sprite[l].width+40) {
              if (sprite[water[g]].tem < 250) {
                sprite[water[g]].tem += 8;
              }
            }
          }
        }
      }
    }
    if (burners[bn] == 0) {
      clearInterval(burnerfor);
    }
  }, 1000);
  return 0;
}
