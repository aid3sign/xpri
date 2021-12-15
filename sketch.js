let x = 0

function setup() {
  createCanvas(1920, 1080);
  frameRate (30);
}

function draw() {
  background('black');

  for (let i = 0; i < 1000; i += 5) {
    noFill()
    stroke('white')
    strokeWeight(3)
    ellipse(500, 500, i, i)

    stroke('black')
    strokeWeight(5)
    ellipse(x, 500, 500 - i, 500 - i)

  }
  if (x > width) {
    x = 0
  } else {
    x = x + 10
  }
}