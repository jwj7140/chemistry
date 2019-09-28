var mx;
var my;
var bid;
var selectelement;
document.onmousemove = function(e){
    mx = e.pageX;
    my = e.pageY;
}
document.onmouseup = function() {
  clearInterval(bid);
}

function drag (here) {
  if (event.button != 2 && event.which != 3) {
    var id = here.id;
    if (selectelement != undefined) {
      selectelement.classList.remove("select");
    }
    selectelement = document.getElementById(id);
    clearInterval(bid);
    console.log('start');
    var mup = 0;
    selectelement.classList.add("select");
    bid = setInterval(function() {
      // console.log('move!');
      // console.log(my+'px' + ':' + mx+'px');
      selectelement.style.top = (my-72)+'px';
      selectelement.style.left = (mx-62)+'px';
    }, 50);
  } else {
    rightclick(here);
  }
}
