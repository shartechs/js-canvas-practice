const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 450;
canvas.height = 500;
ctx.fillStyle = "green";

const ballPos = {
  x: 30,
  y: 30,
  r: 30,
  xSpeed: 5,
  ySpeed: 5,
  colorArr: ["red", "blue", "yellow", "purple", "brown", "white"],
};

const drawBall = () => {
  if (ballPos.x + ballPos.r > canvas.width || ballPos.x - ballPos.r < 0) {
    ballPos.xSpeed *= -1;
    const item =
      ballPos.colorArr[Math.floor(Math.random() * ballPos.colorArr.length)];

    ctx.fillStyle = item;
  }
  if (ballPos.y + ballPos.r > canvas.height || ballPos.y - ballPos.r < 0) {
    ballPos.ySpeed *= -1;
    const item =
      ballPos.colorArr[Math.floor(Math.random() * ballPos.colorArr.length)];

    ctx.fillStyle = item;
  }
  ballPos.x += ballPos.xSpeed;
  ballPos.y += ballPos.ySpeed;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  ctx.arc(ballPos.x, ballPos.y, ballPos.r, 0, 2 * Math.PI);
  ctx.fill();
};
const update = () => {
  drawBall();
  requestAnimationFrame(update);
};

update();
