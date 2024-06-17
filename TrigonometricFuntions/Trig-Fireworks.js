let ctx, fires = [];
let width = 800, height = 600;

const random = limit => Math.floor(Math.random() * limit);

function Firework (radius, color) {
    this.color = color;
    this.radius = radius;

    this.initialize = function () {
        this.count = 0;
        this.scale = 0;
        this.x = random(width);
        this.y = height + random(20);
        this.xSpeed = -3 + random(6);
        this.ySpeed = -3 - random(8);
    }

    this.move = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        this.ySpeed += 0.1;
        this.xSpeed /= 1.01;
    }

    this.draw = function () {
        if (this.ySpeed < -1) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        else {
            this.count++;
            for (let t = 0; t < 4; t++) {
                this.scale += 0.06 / this.count;
                let rad = this.radius * this.scale;
                for (let i = 0; i < Math.PI * 2; i += 0.6) {
                    let dx = Math.cos(i) * rad;
                    let dy = Math.sin(i) * rad;
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x + dx, this.y + dy, 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            if (this.count > 30) {
                this.initialize();
            }
        }
    }
    this.initialize();
}

function init() {
    let canvas = document.getElementById('field');
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.3;
    let colors = ["#ff0000", "#ffff00", "#ffffff", "#ff00ff", "#00ff00", "#7F7FFF", "#00ffff"];

    for (let i = 0; i < 14; i++) {
        fires.push(new Firework(random(60) + 60, colors[i % 7]));
    }
    setInterval(tick, 100);
}

function tick() {
    fires.forEach(fire => fire.move())
    paint();
}

function paint () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    fires.forEach(fire => fire.draw())
}