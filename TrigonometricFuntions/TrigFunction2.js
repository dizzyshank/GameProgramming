let ctx;

function init() {
    let canvas = document.getElementById('graph');
    ctx = canvas.getContext('2d');
    paint();
}

function drawLine(x0, y0, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

function paint() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 800);

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    drawLine(0, 400, 800, 400);
    drawLine(400, 0, 400, 800);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 400);
    for (let theta = -Math.PI*2; theta<Math.PI * 2; theta+=0.1) {
        let x = 400 * theta / (Math.PI * 2) + 400;
        let y = Math.sin(theta) * -300 + 400;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}