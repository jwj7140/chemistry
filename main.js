var http = require('http');
var fs = require('fs');
var path = require('path')
var url = require('url');
var express = require('express');
var cors = require('cors');
var request = require('request');
var app = express();

var atom_csv  = fs.readFileSync(path.join(__dirname, 'excel/atoms.csv'));
var atom_value = atom_csv.toString('utf-8');

var atom_value_splitted = atom_value.split('\n');
atom_value_splitted.shift()
var atom_value_2x = atom_value_splitted.map((line) => line.split(','));
var atom_object_list = atom_value_2x.map((line)  => {
  return {
    '원소번호': Number(line[0]),
    '원소기호': line[1],
    '원소이름': line[2],
    '주기': line[3],
    '족': line[4],
    '원자가전자수': line[5],
    '오비탈전자배치': line[6],
    '전기음성도': line[7],
    '1차이온화에너지(kJ / mol)': line[8],
  };
});

app.use(cors());

app.get('/search', function (request, response) {
  var _url = request.url;
  var querydata = url.parse(_url, true).query;
  console.log(querydata.id);
  var a, index=-1;
  for (a=0; a<atom_object_list.length; a++) {
    if (atom_object_list[a].원소이름 == querydata.id) {
      index = a;
      break;
    }
  }
  if (index != -1) {
    var json = JSON.parse(`{"원소이름":"${atom_object_list[index].원소이름}", "원소기호":"${atom_object_list[index].원소기호}"}`);
    response.json(json);
  }
})

app.get('/favicon.ico', function (request, response) {
  response.writeHead(404);
  response.end();
});

app.listen(3000, function () {
  console.log('서버가 시작되었습니다.');
});
