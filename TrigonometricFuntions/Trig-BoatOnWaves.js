let ctx, clock = 0;

function init() {
    let canvas = document.getElementById('graph');
    ctx = canvas.getContext('2d');
    ctx.font = "24px sans-serif";
    setInterval(tick, 20);
}

function tick() {
    clock++;
    paint();
}

function paintWave(degree, amplitude, color) {
    let boatY = 0;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, 600);
    for (let i = 0; i <= 600; i += 20) {
        let y = Math.sin((i + degree) * Math.PI / 180) * amplitude + 300;
        ctx.lineTo(i, y);
        if (i == 300) {
            boatY = y;
        }
    }
    ctx.lineTo(600, 600);
    ctx.fill();
    return boatY;
}

function paint() {
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 600, 600);

    //waves
    let y0 = paintWave(clock, 40, "#0000ff");
    let y1 = paintWave(clock*2.5, 30, "#0022CC");
    let y2 = paintWave(clock * 3, 20, "#2200DD");
    let y = Math.min(y0, Math.min(y1,y2));

    //boat
    ctx.fillStyle = "green";
    ctx.fillRect(275, y-20, 50, 20);
}