var ctx;

function init() {
    var canvas = document.getElementById("field");
    ctx = canvas.getContext("2d");

    var pic = document.getElementById("picture");
    ctx.drawImage(pic, 0, 0, 250, 250);
}
