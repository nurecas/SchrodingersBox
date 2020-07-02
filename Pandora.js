function setup() {
  createCanvas(700, 700, WEBGL);
  ortho();
}

function draw() {
  background(0);
  var d=dist(mouseX, mouseY, width/2, height/2)/4;
    for (var i=-width;i<width;i+=50){
      for (var j=-height;j<height;j+=50){
    noStroke();
    fill(255);
    push();
    translate(i, j,-10);
    rotateY(((mouseX-width/2)/width)*3);
    rotateX(-((mouseY-height/2)/height)*3);
    box(50,50,1);
    pop();
      }
  }

  for (var k=0; k<10; k++) {
  strokeWeight(5);
    stroke(255, 223, 0);
    fill(30);
    push();
    translate(random(-d, d), random(-d, d), 100);
    rotateY(mouseX/width);
    rotateX(-mouseY/height);
    box(100);
    pop();
  }
  
  stroke(0);
  strokeWeight(2);
  noFill();
  rectMode(CORNER);
  rect(-width/2,-height/2,width,height);
}
