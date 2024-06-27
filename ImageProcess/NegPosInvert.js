function init() {
    let canvas = document.getElementById('field');
    ctx = canvas.getContext('2d');

    let pic = document.getElementById('pic');
    ctx.drawImage(pic, 0, 0, 600, 600);

    // 画像データを取得
    src = ctx.getImageData(0, 0, 600, 600);
    // 表示用データの作成
    img = ctx.createImageData(600, 600);

    processImage();
    paint();
}

// 画像処理用の関数
function processImage() {
    // src(元データ)の内容をimg(表示用データへ)
    for (let i = 0; i < src.data.length; i+=4) {
        // 排他的論理和を取り、元のデータを反転させている（ネガ）
        img.data[i+0] = (src.data[i+0]^0xff); //R
        img.data[i+1] = (src.data[i+1]^0xff); //G
        img.data[i+2] = (src.data[i+2]^0xff); //B
        img.data[i+3] = 0xff; //A
    }
}

function paint() {
    ctx.putImageData(img,0,0);
}
