var http = require('http');
var fs = require('fs');
var path = require('path')
var url = require('url');
var express = require('express');
var cors = require('cors');
var app = express();

var atom_csv  = fs.readFileSync(path.join(__dirname, 'excel/atoms.csv'));     /*9 ~ 27 원자csv에 맞게 객체화*/
var atom_value = atom_csv.toString('utf-8');
var atom_value_splitted = atom_value.split('\n');
atom_value_splitted.shift()
var atom_value_2x = atom_value_splitted.map((line) => line.split(','));
var atom_object_list = atom_value_2x.map((line)  => {
  return {
    '종류': line[0],
    '원소번호': Number(line[1]),
    '기호': line[2],
    '이름': line[3],
    '주기': line[4],
    '족': line[5],
    '원자가전자수': line[6],
    '오비탈전자배치': line[7],
    '전기음성도': line[8],
    '1차이온화에너지': line[9],
  };
});

var molecule_csv  = fs.readFileSync(path.join(__dirname, 'excel/molecule.csv'));    /*29 ~ 47 분자csv에 맞게 객체화*/
var molecule_value = molecule_csv.toString('utf-8');
var molecule_value_splitted = molecule_value.split('\n');
molecule_value_splitted.shift()
var molecule_value_2x = molecule_value_splitted.map((line) => line.split(','));
var molecule_object_list = molecule_value_2x.map((line)  => {
  return {
    '종류': line[0],
    '분자식': line[1],
    '이름': line[2],
    '질량수': line[3],
    '녹는점': line[4],
    '끓는점': line[5],
    '밀도': line[6],
    '기체색상': line[7],
    '액체색상': line[8],
    '고체색상': line[9],
  };
});

var tool_csv  = fs.readFileSync(path.join(__dirname, 'excel/tool.csv'));     /*49 ~ 60 도구csv에 맞게 객체화*/
var tool_value = tool_csv.toString('utf-8');
var tool_value_splitted = tool_value.split('\n');
tool_value_splitted.shift()
var tool_value_2x = tool_value_splitted.map((line) => line.split(','));
var tool_object_list = tool_value_2x.map((line)  => {
  return {
    '종류': line[0],
    '이름': line[1],
    '분류': line[2],
  };
});

var information = new Array();                          /*62 ~ 65 위에서 객체화한 변수를 묶어 배열로 저장*/
information[0] = atom_object_list;
information[1] = molecule_object_list;
information[2] = tool_object_list;

app.use(cors());
app.use('/static', express.static('static'));

app.get('/search', function (request, response) {       /*69 ~ 91 메뉴 검색 통신*/
  var _url = request.url;
  var querydata = url.parse(_url, true).query;
  console.log(querydata.id);
  var a,b, index=-1;                                     /*검색결과 없음을 위해 index초기값 설정*/
  for (a=0; a<information.length; a++) {                /*74 ~ 82 배열에서 쿼리값과 일치한 객체의 번호를 탐색*/
    for (b=0; b<information[a].length; b++) {
      if (information[a][b].이름 == querydata.id) {
        index = 1;
        break;
      }
    }
    if(index != -1) break;
  }
  if (index != -1) {                                    /*83 ~ 90 검색결과가 있다면 */
    if (a == 0) {                                       /*원소를 불러오려 하면 다른 방식으로 json을 생성*/
      var json = JSON.parse(`{"종류":"${information[a][b].종류}", "이름":"${information[a][b].기호}"}`);
    } else {
      var json = JSON.parse(`{"종류":"${information[a][b].종류}", "이름":"${information[a][b].이름}"}`);
    }
    response.json(json);                                /*fetch에 응답*/
  }
})

// app.get ('/molecule', function(request, response) {
//   var _url = request.url;
//   var querydata = url.parse(_url, true).query;
//   var a;
//   for (a=0; a<information[1].length; a++) {
//     if (querydata.id == information[1][a].이름) {
//       break;
//     }
//   }
//   var json = JSON.parse(`{"이름":"${information[1][a].이름}", "분자식":"${information[1][a].기호}"}`);
//   response.json(json);
// });

app.get('/', function (request, response) {
  response.end (fs.readFileSync(__dirname + "/index.html"));
});

app.get('/favicon.ico', function (request, response) {
  response.writeHead( 404);
  response.end();
});
app.listen(3000, function () {                                     /*110 ~ 112 서버 실행*/
  console.log('서버가 시작되었습니다.');
});
