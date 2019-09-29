var beaker = new Array(10);
var a, b;
for (a=0; a<beaker.length; a++) {
  beaker[a] = {용질: '', 설정: ''};
  beaker[a].용질 = Array(6);
  for (b=0; b<beaker[a].용질.length; b++) {
    beaker[a].용질[b] = {분자이름: '', 분자식: '', 질량: '', 질량수: '', 녹는점: '', 끓는점: '', 밀도: '', 기체색상: '', 액체색상: '', 고체색상: ''};
  }
  beaker[a].설정 = {id: '', 분자이름: '', 분자식: '', 질량: '', 질량수: '', 녹는점: '', 끓는점: '', 온도: '', 밀도: '', 기체색상: '', 액체색상: '', 고체색상: ''};
}
next = {id: 0, solute: 0};


function createbeaker(name) {
  fetch(`http://localhost:3000/molecule/?id=${name}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(Json) {
      console.log('sadsad');
      console.log(Json);
      beaker[next.id].설정.id = count;
      beaker[next.id].설정.분자이름 = Json.이름;
      beaker[next.id].설정.분자식 = Json.분자식;
      beaker[next.id].설정.질량수 = Json.질량수;
      beaker[next.id].설정.질량 = Json.분자식;
      beaker[next.id].설정.녹는점 = Json.녹는점;
      beaker[next.id].설정.끓는점 = Json.끓는점;
      beaker[next.id].설정.온도 = Json.온도;
      beaker[next.id].설정.밀도 = Json.밀도;
      beaker[next.id].설정.기체색상 = Json.액체색상;
      beaker[next.id].설정.고체색상 = Json.고체색상;
      var create = document.createElement('div');
      create.id = count;
      create.className = 'labitem beaker';
      create.onmousedown = function () {
        drag(this);
      }
      create.style.top = '30px';
      create.style.left = '30px';
      create.innerHTML =`<div class="labitem_img" style="content: url(static/img/tool/beaker.png)"></div>`;
      document.getElementById("laboratory").appendChild(create);
      count++;
      next.id++;
      console.log(beaker);
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
