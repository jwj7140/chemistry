var mx;
var my;
document.onmousemove = function(e){
    mx = e.pageX;
    my = e.pageY;
}

var mcount = false;

function drag (here) {
  console.log(here);
  if (mcount) mcount = false; else mcount = true;
  console.log(mcount);
  if (mcount) {
    console.log('start');
    var id = here;
    element = document.getElementById(id);
      setInterval(function() {
        if (mcount) {
          // console.log('move!');
          // console.log(my+'px' + ':' + mx+'px');
          element.style.top = (my-72)+'px';
          element.style.left = (mx-62)+'px';
        } else {
          return 0;
        }
      }, 50);
  }
}

// document.onmouseup  = function() {
//   console.log('end');
//   mcount++;
// }
