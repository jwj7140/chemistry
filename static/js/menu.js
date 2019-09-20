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
    getjson = Json;
    console.log(getjson);
    var div = document.createElement('div');
    div.innerHTML = `${getjson}`;
    document.getElementById("items").appendChild(div);
    // t.src = `http://localhost:3000/search/?id=${input}`;
    // t.id = input;
    // setTimeout(function(){},500);
    // document.getElementById(input).remove();
  });
}
