var http = require('http');
var fs = require('fs');
var path = require('path')
var url = require('url');
var express = require('express');
var cors = require('cors');
var app = express();

var atom_csv  = fs.readFileSync(path.join(__dirname, 'excel/atoms.csv'));
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

var molecule_csv  = fs.readFileSync(path.join(__dirname, 'excel/molecule.csv'));
var molecule_value = molecule_csv.toString('utf-8');
var molecule_value_splitted = molecule_value.split('\n');
molecule_value_splitted.shift()
var molecule_value_2x = molecule_value_splitted.map((line) => line.split(','));
var molecule_object_list = molecule_value_2x.map((line)  => {
  return {
    '종류': line[0],
    '기호': line[1],
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
var information = new Array();
information[0] = atom_object_list;
information[1] = molecule_object_list;

app.use(cors());

app.get('/search', function (request, response) {
  var _url = request.url;
  var querydata = url.parse(_url, true).query;
  console.log(querydata.id);
  var a,b, index=-1;
  for (a=0; a<information.length; a++) {
    for (b=0; b<information[a].length; b++) {
      if (information[a][b].이름 == querydata.id) {
        index = 1;
        break;
      }
    }
    if(index != -1) break;
  }
  if (index != -1) {
    var json = JSON.parse(`{"종류":"${information[a][b].종류}", "이름":"${information[a][b].이름}", "기호":"${information[a][b].기호}"}`);
    response.json(json);
  }
})

app.get ('/molecule', function(request, response) {
  var _url = request.url;
  var querydata = url.parse(_url, true).query;
  var a;
  for (a=0; a<information[1].length; a++) {
    if (querydata.id == information[1][a].이름) {
      break;
    }
  }
  var json = JSON.parse(`{"이름":"${information[1][a].이름}", "분자식":"${information[1][a].기호}"}`);
  response.json(json);
});

app.get('/favicon.ico', function (request, response) {
  response.writeHead(404);
  response.end();
});
app.listen(3000, function () {
  console.log('서버가 시작되었습니다.');
});
