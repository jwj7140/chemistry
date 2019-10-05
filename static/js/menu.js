window.addEventListener('load', function() {    /*1 ~ 20 메뉴 열기/닫기 버튼 이벤트*/
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

function search() {                       /*22 ~ 39 메뉴 검색 이벤트*/
  var input = document.getElementById("search_text").value;
  var getjson;
  fetch(`http://localhost:3000/search/?id=${input}`)    /*25 ~ 38 node서버로 요청을 보냄*/
  .then(function(response) {
    return response.json();
  })
  .then(function(Json) {                                /*29 ~ 38 json 응답이 왔다면*/
    console.log(Json);
    var div = document.createElement('div');
    div.className = 'menuitem';
    div.ondblclick = function () {
      create(Json);                                     /*메뉴에 검색된 요소를 더블클릭하면 캔버스에 요서생성 함수 실행*/
    }
    div.innerHTML = `<img src="static/img/${Json.종류}/${Json.이름}.png" class="menuitem_img"><div class="menuitem_name">${Json.이름}</div>`;
    document.getElementById("items").prepend(div);    /*만들어진 메뉴요소를 html에 출력*/
  });
}
