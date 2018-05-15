var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors()); // http://guswnsxodlf.github.io/enable-CORS-on-express

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var gameState = { winner: '', isXnext: true, squares: Array(9).fill('') };

function wins(turn){ //turn='X' 또는 ruturn='O'
  var speaker = gameState.squares

  return (speaker[0]==turn && speaker[1]==turn && speaker[2]==turn) ||
    (speaker[3]==turn && speaker[4]==turn && speaker[5]==turn) ||
    (speaker[6]==turn && speaker[7]==turn && speaker[8]==turn) ||
    (speaker[0]==turn && speaker[3]==turn && speaker[6]==turn) ||
    (speaker[1]==turn && speaker[4]==turn && speaker[7]==turn) ||
    (speaker[3]==turn && speaker[5]==turn && speaker[9]==turn) ||
    (speaker[0]==turn && speaker[4]==turn && speaker[8]==turn) ||
    (speaker[2]==turn && speaker[4]==turn && speaker[6]==turn) ;


function caculwinner(){
//x가 이기는 경우
//o가 이기는 경우
  return '';
}

app.get('/game_state', (req, res) => {
  res.charset = 'UTF-8';
  res.send(gameState); // send JSON
} );

// https://...../move?turn=X&pos=4
app.get('/move', (req, res) => {
  res.charset = 'UTF-8';
  var turn = req.query.turn;
  var pos = req.query.pos;
  //맞는 조건 검사
  if( gameState.isXnext ? (turn == 'X') : (turn == 'O')){
    //(gameState.isXnext && turn == 'X') || (!gameState.isXnext && turn == 'O')){
  //  console.log('move: '+turn+pos);
    gameState.squares[pos] = turn;
    gameState.isXnext = !gameState.isXnext;
    res.send('OK');
  }
  else {
    res.send('ERROR');
  }
} );

app.get('/', (req, res) => {
  res.charset = 'UTF-8';
  res.send('GET으로 넘어온 name은 '+ req.query.name + '입니다.');
} );

app.post('/', (req, res) => {
  res.charset = 'UTF-8';
  res.send('POST로 넘어온 name은 '+ req.body.name + '입니다.');
} );

app.listen(8080, () => console.log('Example app listening on port 8080!'));
