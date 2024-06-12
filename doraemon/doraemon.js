function drawDraemon() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
  
    const circle = new Path2D();
    circle.arc(100, 100, 30, 0, 2 * Math.PI);
    circle.moveTo(190,100);
    circle.arc(160, 100, 30, 0, 2 * Math.PI);
  
    const eye = new Path2D();
    eye.moveTo(130, 100);
    eye.arc(118, 100, 10, 0, 2 * Math.PI);
    eye.arc(143, 100, 10, 0, 2 * Math.PI);
  
    const nose = new Path2D();
    nose.arc(130, 130, 10, 0, 2 * Math.PI);
  
    const line = new Path2D();
    line.moveTo(130, 140);
    line.lineTo(130, 200);
    line.closePath();
  
    const mouse = new Path2D();
    mouse.arc(130, 140, 60, 0, Math.PI, false); 
  
    const face = new Path2D();
    face.arc(130, 130, 90, 0, 2 * Math.PI, true);
    face.arc(130, 130, 90, 0, 2 * Math.PI, true);
  
    const face2 = new Path2D();
    face2.arc(130, 150, 70, 0, 2 * Math.PI, true);
  
    const hige = new Path2D();
    hige.moveTo(170, 140);
    hige.lineTo(203, 120);
    hige.closePath();
    hige.moveTo(170, 150);
    hige.lineTo(207, 150);
    hige.closePath();
    hige.moveTo(170, 160);
    hige.lineTo(200, 180);
    hige.closePath();
    hige.moveTo(90, 140);
    hige.lineTo(60, 120);
    hige.closePath();
    hige.moveTo(90, 150);
    hige.lineTo(53, 150);
    hige.closePath();
    hige.moveTo(90, 160);
    hige.lineTo(60, 180);
    hige.closePath();
  
    ctx.fillStyle = '#78AAD3';
    ctx.fill(face);
    ctx.stroke(face);
  
    ctx.fillStyle = '#fff';
    ctx.fill(face2);
    ctx.stroke(face2);
    ctx.fill(circle);
    ctx.stroke(circle);
  
    ctx.fillStyle = '#000'
    ctx.fill(eye);
  
    ctx.fillStyle = '#B43E38';
    ctx.fill(nose);
    ctx.stroke(nose);
  
    ctx.stroke(line);
    ctx.stroke(hige);
    ctx.stroke(mouse);
  }