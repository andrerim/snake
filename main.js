var canv = document.getElementById("snake");
var ctx = canv.getContext("2d");
var gridSize = 10;
var gameSpeed = 10;

var fruit = {
  posX: Math.floor((Math.random() * canv.width) / 10) * 10,
  posY: Math.floor((Math.random() * canv.height) / 10) * 10,
  width: 10,
  height: 10
};

var snake = {
  snakeWidth: 10,
  snakeHeight: 10,
  headPosX: 50,
  headPosY: 50,
  startX: 50,
  startY: 50,
  body: [],
  dirX: 0,
  dirY: gridSize
};

// setup
ctx.fillStyle = "red";
ctx.fillRect(
  snake.headPosX,
  snake.headPosY,
  snake.snakeWidth,
  snake.snakeHeight
);

setInterval(() => {
  ctx.clearRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "green";
  ctx.fillRect(fruit.posX, fruit.posY, fruit.width, fruit.height);

  ctx.fillStyle = "red";
  snake.headPosX += snake.dirX;
  snake.headPosY += snake.dirY;

  ctx.fillRect(
    snake.headPosX,
    snake.headPosY,
    snake.snakeWidth,
    snake.snakeHeight
  );

  for (let i = 0; i < snake.body.length; i++) {
    ctx.fillStyle = "blue";
    ctx.fillRect(
      snake.body[i][0],
      snake.body[i][1],
      snake.snakeWidth,
      snake.snakeHeight
    );
  };

  if (snake.headPosX == fruit.posX && snake.headPosY == fruit.posY) {
    snake.body.push([snake.headPosX, snake.headPosY]);

    fruit.posX = Math.floor((Math.random() * canv.width) / 10) * 10;
    fruit.posY = Math.floor((Math.random() * canv.height) / 10) * 10;

    console.log(snake.body);
  };

  if (snake.body.length > 0) {
      snake.body.pop();
    for (let i = 0; i <= snake.body.length-1; i++) {
        console.log(i)
      snake.body[i] = snake.body[i+1];
    };
  };
}, 1000 / gameSpeed);

document.onkeydown = function(event) {
  var keyCode;
  if (event == null) {
    keyCode = window.event.keyCode;
  } else {
    keyCode = event.keyCode;
  }

  switch (keyCode) {
    // left
    case 37:
      snake.dirX = -gridSize;
      snake.dirY = 0;
      break;
    // up
    case 38:
      snake.dirX = 0;
      snake.dirY = -gridSize;
      break;
    // right
    case 39:
      snake.dirX = gridSize;
      snake.dirY = 0;
      break;

    // down
    case 40:
      snake.dirX = 0;
      snake.dirY = gridSize;
      break;
    default:
      break;
  }
};
