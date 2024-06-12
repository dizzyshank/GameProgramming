let ctx, degree=0;

function init() {
    let canvas = document.getElementById('graph');
    ctx = canvas.getContext('2d');
    ctx.font = "24 sans-serif";
    paint();
}

function update() {
    degree = document.getElementById('theta').value;
    document.getElementById('degree').textContent = degree;
    paint();
}

function drawLine(x0, y0, x1, y1, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.closePath();
    ctx.stroke();
}

function paint() {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,600,600);
    ctx.save(); //コンテキストを保存
    ctx.translate(300, 300);//(300,300)を原点へ

    //座標軸
    drawLine(0, -300, 0, 300, "black");
    drawLine(-300, 0, 300, 0, "black");

    let s0 = Math.sin(degree * Math.PI / 180).toFixed(3);
    let c0 = Math.cos(degree * Math.PI / 180).toFixed(3);
    let c = c0 * 200,s = s0 * -200;

    drawLine(0,0,c,s,"red");
    ctx.arc(0,0,200,0,Math.PI * 2);
    ctx.stroke();

    //ラベル
    drawLine(c,s,c,0,"Blue");
    ctx.strokeText("cos:" + c0, c - 10, 20);
    drawLine(c,s,0,s,"green")
    ctx.strokeText("sin:" + s0, -40, s-10);

    ctx.restore();
}