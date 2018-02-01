window.addEventListener('load', function(){

var canvas = document.querySelector('#main-canvas');
var context = canvas.getContext('2d');
var oldX = 100;
var oldY = 100;

  var setX= function(x){
  if (x < 490 && x > 10)
    oldX = x;
  }

  var setY = function(y){
    if (y < 340 && y > 10)
      oldY = y;
  }

  var setNewCoods = function(x, y){
    setX(x);
    setY(y);
  }

context.beginPath();
context.moveTo(oldX, oldY);


var newCoordinates = function(event, x, y){
  // console.log("whats the key", event.key);
  // console.log('what is y initially', y);
  switch (event.key) {
    case 'ArrowDown':
      // console.log('what was y', y);
      y+= 4;
      // console.log('whats y now', y);
      draw(x, y);
      break;
    case 'ArrowUp':
      y-= 4;
      draw(x, y);
      break;
    case 'ArrowLeft':
      x-= 4;
      draw(x, y);
      break;
    case 'ArrowRight':
      x+= 4;
      draw(x, y);
      break;
  }
}

var draw = function(x, y) {
  context.lineTo(x, y);
  context.stroke();
  setNewCoods(x ,y);
}

document.addEventListener('keydown', function(event){
  // console.log('hello?', event);
  newCoordinates(event, oldX, oldY);
})

})
