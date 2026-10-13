function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245, 240, 225);
  
  stroke(200, 190, 175);
  strokeWeight(3);
  line(300, 0, 300, 200);

  stroke(0);
  strokeWeight(1.5);
  
  line(50, 50, 250, 50);
  line(50, 62, 250, 62);
  line(50, 74, 250, 74);
  line(50, 86, 250, 86);
  line(50, 98, 250, 98);

  line(350, 50, 550, 50);
  line(350, 62, 550, 62);
  line(350, 74, 550, 74);
  line(350, 86, 550, 86);
  line(350, 98, 550, 98);


  let t = frameCount % 600; 

  let y1 = 86;
  let y2 = 74;
  let y3 = 62;
  let y4 = 80;
  let y5 = 68;

  if (t > 60 && t < 150)  { y1 = 86 + (t - 60) * 3.5; }
  if (t > 150 && t < 240) { y2 = 74 + (t - 150) * 3.5; }
  if (t > 240 && t < 330) { y3 = 62 + (t - 240) * 3.5; }
  if (t > 330 && t < 420) { y4 = 80 + (t - 330) * 3.5; }
  if (t > 420 && t < 510) { y5 = 68 + (t - 420) * 3.5; }


  fill(0);
  
  // Nota 1
  if (t < 150) {
    noStroke(); ellipse(90, y1, 14, 10); 
    stroke(0); strokeWeight(1.5); line(96, y1, 96, y1 - 36);
  }
  
  // Nota 2
  if (t < 240) {
    noStroke(); ellipse(150, y2, 14, 10); 
    stroke(0); strokeWeight(1.5); line(156, y2, 156, y2 - 36);
  }
  
  // Nota 3
  if (t < 330) {
    noStroke(); ellipse(210, y3, 14, 10); 
    stroke(0); strokeWeight(1.5); line(216, y3, 216, y3 - 36);
  }
  
  // Nota 4
  if (t < 420) {
    noStroke(); ellipse(390, y4, 14, 10); 
    stroke(0); strokeWeight(1.5); line(396, y4, 396, y4 - 36);
  }
  
  // Nota 5
  if (t < 510) {
    noStroke(); ellipse(470, y5, 14, 10); 
    stroke(0); strokeWeight(1.5); line(476, y5, 476, y5 - 36);
  }


 
  let pianoY = 200;
  
  // Tasti Bianchi 
  fill(255);
  stroke(0);
  strokeWeight(2);
  for (let i = 0; i < 15; i++) {
    rect(i * 40, pianoY, 40, 200);
  }
  
  //Tasti Neri 
  fill(0);
  noStroke();
  
  rect(28, pianoY, 24, 110);
  rect(68, pianoY, 24, 110);
  
  rect(148, pianoY, 24, 110);
  rect(188, pianoY, 24, 110);
  rect(228, pianoY, 24, 110);
  
  rect(308, pianoY, 24, 110);
  rect(348, pianoY, 24, 110);
  
  rect(428, pianoY, 24, 110);
  rect(468, pianoY, 24, 110);
  rect(548, pianoY, 24, 110);


  fill(0);
  noStroke();
  textSize(14);
  text("X: " + round(mouseX) + "  Y: " + round(mouseY), 15, 25);
}
