window.addEventListener('load', function() {
  // var s = true;
  var menu_o = document.querySelector('.menu_o');
  var menu_c = document.querySelector('.menu_c');
  var menu = document.querySelector('#menu_in');

  menu_o.addEventListener('click', function () {
    menu.classList.toggle('off');
    menu.classList.toggle('on');
    menu_o.classList.toggle('off');
    menu_o.classList.toggle('on');
    menu_c.classList.toggle('on');
    menu_c.classList.toggle('off');
  });

  menu_c.addEventListener('click', function () {
    menu.classList.toggle('off');
    menu.classList.toggle('on');
    menu_o.classList.toggle('off');
    menu_o.classList.toggle('on');
    menu_c.classList.toggle('on');
    menu_c.classList.toggle('off');
  });
});
