function init() {
    let canvas = document.getElementById('field');
    ctx = canvas.getContext('2d');

    let pic = document.getElementById('pic');
    ctx.drawImage(pic, 0, 0);

    src = ctx.getImageData(0, 0, 600, 600);
    img = ctx.createImageData(600, 600);

    processImage();
    paint();
}

function processImage() {
    for (let i = 0; i < src.data.length; i+=4) {
        let v = Math.random() * 50 + 100;
        let r = Math.floor(src.data[i+0]*v/100);
        let g = Math.floor(src.data[i+1]*v/100);
        let b = Math.floor(src.data[i+2]*v/100);
        img.data[i+0] = Math.min(255,r);
        img.data[i+1] = Math.min(255,g);
        img.data[i+2] = Math.min(255,b);
        img.data[i+3] = 0xff;
    }
}

function paint() {
    ctx.putImageData(img, 0, 0);
}