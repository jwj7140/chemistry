var beaker = new Array(10);
var a, b;
for (a=0; a<beaker.length; a++) {
  beaker[a] = {용질: '', 설정: ''};
  beaker[a].용질 = Array(6);
  for (b=0; b<beaker[a].용질.length; b++) {
    beaker[a].용질[b] = {id: '', 이름: '', 질량: ''};
  }
  beaker[a].설정 = {id: '', 이름: '', 질량: '', 온도: ''};
}
nextsolute = new Array(beaker.length);
function createbeaker_menu() {

}
