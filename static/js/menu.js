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

  menu_c.addEventListener('click', function () {
    menu.classList.toggle('off');
    menu.classList.toggle('on');
    menu_o.classList.toggle('off');
    menu_o.classList.toggle('on');
    menu_c.classList.toggle('on');
    menu_c.classList.toggle('off');
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

function search() {
  var input = document.getElementById("search_text").value;
  var getjson;
  fetch(`http://localhost:3000/search/?id=${input}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(Json) {
    console.log(Json);
    var div = document.createElement('div');
    div.className = 'menuitem';
    div.ondblclick = function () {
      click_menu_item(Json);
    }
    div.innerHTML = `<img src="static/img/atoms/${Json.원소기호}.png" class="menuitem_img"><div class="menuitem_name">${Json.원소이름}:${Json.원소기호}</div>`;
    document.getElementById("items").appendChild(div);
    // document.getElementById(input).remove();
  });
}
var count = 0;
function click_menu_item(Json) {
  var create = document.createElement('div');
  create.id = count;
  create.className = 'labitem';
  // create.onclick = function () {
  //   drag(this);
  // }
  create.onmousedown = function () {
    drag(this);
  }
  create.style.top = '30px';
  create.style.left = '30px';
  create.innerHTML = `<div class="labitem_img" style="content: url(static/img/atoms/${Json.원소기호}.png)"></div>${Json.원소이름}`;
  document.getElementById("laboratory").appendChild(create);
  count++;
}
