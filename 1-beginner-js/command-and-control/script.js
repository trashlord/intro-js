var textBox = document.querySelector('.control input');
var ship = document.querySelector('.ship');
var button = document.querySelector('.control button');

var commandEntered = function(event) {
  event.preventDefault();

  var text = textBox.value;

  var words = text.split(' ');

  var firstWord = words[0];
  var secondWord = words[1];

  if (firstWord === 'launch') {
    launch();
  } else if (firstWord === 'go') {
    go(secondWord);
  } else if(firstWord === 'rotate') {
    rotate(secondWord);
  } else {
    wrongCommand();
  }
}

var isLaunched = false;
var isDestroyed = false;

button.addEventListener('click', commandEntered);


function launch() {
  if (isDestroyed) {
    return;
  }

  isLaunched = true;

  ship.src = 'resources/spaceship.png';
}

var go = function(direction) {
  if (!isLaunched) {
    return wrongCommand();
  }

  var directions = {
    'left': [-80, 0],
    'right': [80, 0],
    'up': [0, 80],
    'down': [0, -80]
  };

  var displacement = directions[direction];

  if (displacement === undefined) {
    wrongCommand();
  }

  var shipLeftText = ship.style.left;
  var shipBottomText = ship.style.bottom;

  var shipLeftPosition = parseInt(shipLeftText);
  var shipBottomPosition = parseInt(shipBottomText);

  var properties = {
    'left': shipLeftPosition + displacement[0] + 'px',
    'bottom': shipBottomPosition + displacement[1] + 'px'
  };
  ship.style.left = properties['left']; // properties.left
  ship.style.bottom = properties['bottom'];
}

var rotate = function(amount) {
  if (!isLaunched) {
    wrongCommand();
  }

  var degrees = parseInt(amount);

  ship.style.transition = '1s ease-in';
  ship.style.transform = 'rotate(' + degrees + 'deg)'; // rotate(80deg)
};

function wrongCommand() {
  isDestroyed = true;
  isLaunched = false;
  ship.src = 'resources/explode.png';
}









