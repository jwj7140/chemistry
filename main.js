var express = require('express');

var app = express();

app.use('/static', express.static('public'));

app.get('/', function (request, response) {
  var template = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>proto</title>
      <link rel="stylesheet" href="static/css/1.css">
      <script src="static/js/menu.js"></script>
    </head>
    <body>
      <div id="item_menu">
        <div id="menu_in" class="off">
          <div id="search">
            <input type="text" name="" value="" id="search_text">
            <button type="button" name="button" id="search_button">검색</button>
          </div>
          <div id="items">
          </div>
        </div>
        <div id="menu_out">
          <img src="static/img/open.png" alt="" class="menu_o on">
          <img src="static/img/close.png" alt="" class="menu_c off">
        </div>
      </div>
      <div id="condition">
        <div id="condition_title">상태</div>
        <div id="condition_body">
        </div>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </body>
    </html>`;

  response.writeHead(200);
  response.end(template);
});

app.get('/favicon.ico', function (request, response) {
  response.writeHead(404);
  response.end();
});

app.listen(3000, function () {
  console.log('서버가 시작되었습니다.');
});
