let ctx, posX = 0, velocityX = 5;

function init() {
    ctx = document.getElementById('viewer').getContext('2d');
    setInterval(tick, 100);
}

function tick () {
    posX += velocityX;
    if (posX > 600) posX = 0;
    paint();
}

function paint() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 600, 600);
    ctx.fillStyle = "white";
    ctx.fillRect(posX, 200, 10, 10);
    ctx.fill();
}