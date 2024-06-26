let ctx, src, img;

function init() {
    let canvas = document.getElementById("field");
    ctx = canvas.getContext("2d");

    let pic = document.getElementById("picture");
    ctx.drawImage(pic, 0, 0, 250, 250);

    src = ctx.getImageData(0, 0, 250, 250);
    img = ctx.createImageData(250, 250);

    processImage();
    paint();
}

function processImage() {
    for(let i = 0; i<250 * 250 * 4; i+=4) {
        img.data[i + 0] = src.data[i + 0]; //R
        img.data[i + 1] = src.data[i + 1]; //G
        img.data[i + 2] = src.data[i + 2]; //B
        img.data[i + 3] = src.data[i + 3]; //A
    }
}

function paint() {
    ctx.putImageData(img, 0, 0);
}