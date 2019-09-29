var beaker = new Array(10);
var a, b;
for (a=0; a<beaker.length; a++) {
  beaker[a] = {용질: '', 설정: ''};
  beaker[a].용질 = Array(6);
  for (b=0; b<beaker[a].용질.length; b++) {
    beaker[a].용질[b] = {id: '', 이름: '', 질량: ''};
  }
  beaker[a].설정 = {id: '', 분자이름: '', 질량: '', 온도: ''};
}
next = {id: 0, solute: 0};


function createbeaker(name) {
  fetch(`http://localhost:3000/beaker/?id=${name}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(Json) {
      console.log(json);
      beaker[next.id].설정.id = count;
      beaker[next.id].설정.분자이름 = Json.name;

    })
}

// var create = document.createElement('div');
// create.id = count;
// beaker[]
// create.className = 'labitem';
// create.onmousedown = function () {
//   drag(this);
// }
// create.style.top = '30px';
// create.style.left = '30px';
// create.innerHTML = `<div class="labitem_img" style="content: url(static/img/${Json.종류}/${Json.기호}.png)"></div>`;
// document.getElementById("laboratory").appendChild(create);
