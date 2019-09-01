window.addEventListener('load', function() {
  // var s = true;
  var menu = document.querySelector('.menu_btn');
  console.log(menu);
  menu.addEventListener('click', function () {
    var menu = document.querySelector('#menu_in');
    menu.classList.toggle('off');
    menu.classList.toggle('on');
    // if (s) {
    //   menu.classList.remove('off');
    //   menu.classList.add('on');
    //   s = false;
    // } else {
    //   menu.classList.remove('on');
    //   menu.classList.add('off');
    //   s = true;
    // }
  });
});
