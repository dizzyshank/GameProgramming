function init() {
    let canvas = document.getElementById('field');
    ctx = canvas.getContext('2d');

    let pic = document.getElementById('pic');
    ctx.drawImage(pic, 0, 0, 600, 600);

    src = ctx.getImageData(0, 0, 600, 600);
    img = ctx.createImageData(600, 600);

    processImage();
    paint();
}

function processImage() {
    for (let i = 0; i < src.data.length; i+=4) {
        let r = src.data[i + 0];
        let g = src.data[i + 1];
        let b = src.data[i + 2];
        let a = 0xff;
        let gray = Math.floor((r*3 + g*4 + b*2)/9);

        img.data[i + 0] = gray;
        img.data[i + 1] = gray;
        img.data[i + 2] = gray;
        img.data[i + 3] = 0xff;
    }
}

function paint() {
    ctx.putImageData(img, 0, 0);
}