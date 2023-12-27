const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 450;
canvas.height = 500;

const ballPos = {
  x: 30,
  y: 30,
  r: 30,
  xSpeed: 5,
  ySpeed: 5,
};

const drawBall = () => {
  if (ballPos.x + ballPos.r > canvas.width || ballPos.x - ballPos.r < 0) {
    ballPos.xSpeed *= -1;
  }
  if (ballPos.y + ballPos.r > canvas.height || ballPos.y - ballPos.r < 0) {
    ballPos.ySpeed *= -1;
  }
  ballPos.x += ballPos.xSpeed;
  ballPos.y += ballPos.ySpeed;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "green";
  ctx.beginPath();

  ctx.arc(ballPos.x, ballPos.y, ballPos.r, 0, 2 * Math.PI);
  ctx.fill();
};
const update = () => {
  drawBall();
  requestAnimationFrame(update);
};

update();
