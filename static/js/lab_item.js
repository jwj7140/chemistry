var mx;
var my;
var bid;
document.onmousemove = function(e){
    mx = e.pageX;
    my = e.pageY;
}
document.onmouseup = function() {
  console.log('sdd');
  clearInterval(bid);
}
function drag (here) {
  console.log('start');
  var id = here.id;
  var mup = 0;
  element = document.getElementById(id);
  bid = setInterval(function() {
    // console.log('move!');
    // console.log(my+'px' + ':' + mx+'px');
    element.style.top = (my-72)+'px';
    element.style.left = (mx-62)+'px';
  }, 50);
  return 0;
}


// var mcount = false;
//
// function drag (here) {
//   console.log(here);
//   if (mcount) mcount = false; else mcount = true;
//   console.log(mcount);
//   if (mcount) {
//     console.log('start');
//     var id = here;
//     element = document.getElementById(id);
//       setInterval(function() {
//         if (mcount) {
//           // console.log('move!');
//           // console.log(my+'px' + ':' + mx+'px');
//           element.style.top = (my-72)+'px';
//           element.style.left = (mx-62)+'px';
//         } else {
//           return 0;
//         }
//       }, 50);
//   }
// }
