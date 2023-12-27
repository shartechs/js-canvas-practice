const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 450;
canvas.height = 500;

const ballPos = {
  x: 0,
  y: 0,
  r: 30,
  xSpeed: 1,
  ySpeed: 1,
};

const drawBall = () => {
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

console.log(canvas);
