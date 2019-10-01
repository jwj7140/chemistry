window.addEventListener('load', function() {
  var s = true;
  var menu = document.getElementById('item_menu');
  var menu_b = document.getElementById('menu_b');
  var menu_i = document.getElementById('menu_in');

  menu_b.addEventListener('click', function () {
    menu_i.classList.toggle('off');
    menu_i.classList.toggle('on');
    if (s) {
      menu_b.src = 'static/img/menu/close.png';
      menu.style.height = "30%"
      s = false;
    } else {
      menu_b.src = 'static/img/menu/open.png'
      menu.style.height = "0%";
      s = true;
    }
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
    if (Json.종류 == 'atom') {
      div.innerHTML = `<img src="static/img/${Json.종류}/${Json.기호}.png" class="menuitem_img"><div class="menuitem_name">${Json.이름}</div>`;
    } else if (Json.종류 == 'molecule') {
      div.innerHTML = `<img src="static/img/${Json.종류}/${Json.이름}.png" class="menuitem_img"><div class="menuitem_name">${Json.이름}</div>`;
    }
    document.getElementById("items").prepend(div);
  });
}
var count = 0;
function click_menu_item(Json) {
  console.log("sdsdsdsdsd");
  if (Json.종류 == 'molecule') {
    createbeaker(Json.이름);
  } else if (Json.종류 == 'atom') {

  }
  count++;
}
