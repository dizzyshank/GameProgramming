function init() {
    // canvasのフィールドを取得。
    let canvas = document.getElementById('field');
    ctx = canvas.getContext('2d');

    // 画像のイメージを描画
    let pic = document.getElementById('pic');
    ctx.drawImage(pic, 0, 0, 600, 600);

    // 作業用のイメージを作成
    src = ctx.getImageData(0, 0, 600, 600);
    img = ctx.createImageData(600,600);

    processImage();
    paint();
}

function processImage() {
    let percent = document.getElementById('brt').value;

    for (let y = 0; y < 600; y++) {
        for (let x = 0; x < 600; x++) {
            let i = (y * 600 + x) * 4;
            let r = Math.floor(src.data[i+0]*percent/100);
            let g = Math.floor(src.data[i+1]*percent/100);
            let b = Math.floor(src.data[i+2]*percent/100);
            img.data[i+0] = Math.min(255, r);
            img.data[i+1] = Math.min(255, g);
            img.data[i+2] = Math.min(255, b);
            img.data[i+3] = 0xff;
        }
    }
}

function paint() {
    ctx.putImageData(img, 0, 0);
}