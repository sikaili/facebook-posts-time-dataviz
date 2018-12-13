p5.prototype.stroke = function () {
  this._renderer._setProperty('_strokeSet', true);
  this._renderer._setProperty('_doStroke', true);
  this._renderer.stroke.apply(this._renderer, invertColor(arguments));
  return this;
};

p5.prototype.fill = function () {
  this._renderer._setProperty('_fillSet', true);
  this._renderer._setProperty('_doFill', true);
  this._renderer.fill.apply(this._renderer, invertColor(arguments));
  return this;
};
let arcsDump = [];
let nuit = true;
let arcs = listTime;
let stage = 0;
let ee = 0;

function preload() {
  font = loadFont("assets/AndaleMono.ttf");
  sound = loadSound("assets/click.m4a");
}

function setup() {
  textFont(font);
  masterVolume(0.2);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // arrayBar(arcs);
  // every 5 frames change the array
  arcsDump = (abs(mouseX - pmouseX) > 0 || abs(mouseY - pmouseY) > 0) && stage === 0 ? Choose(arcs) : arcsDump;
  // frameCount % 5 === 0 && arcsDump.length !== arcs.length ? arcsDump = arcs.slice(0, (frameCount / 5)) : "";
  // frameCount % 5 === 0 ? (function () {
  //   sound.rate(1 + Math.random() / 20);
  //   sound.play()
  // })() : "";
  background(0, 60);
  // bar de navigation
  if (height > width) {
    push();
    stroke(0, 0);
    fill(30, 50, 150, 100);
    rect(width - 15, mouseY, 15, height - mouseY);
    pop();
  } else {
    push();
    stroke(0, 0);
    fill(30, 50, 150, 100);
    rect(0, height - 15, mouseX, 15);
    pop();
  }
  translate(width / 2, height / 2 - 100);
  width < height ? scale(1.1) : scale(0.8);
  // clock background && connection number
  for (let h = 0; h < 24; h++) {
    let _size = 2;
    push();
    rotate((h % 24 / 24) * 2 * 3.14)
    strokeWeight(0);
    textSize(16 * _size)
    textAlign(CENTER);
    fill(0, 10);
    text(h, 0, -130 * _size);
    pop();
  }

  textAlign(CENTER);
  textSize(35);
  fill(30, 50, 150, 100);
  text("Post\nNo." + arcsDump.length, 0, 0);
  arcsDump.length > 0 ? text(arcsDump[arcsDump.length - 1].d, 0, 200 * 2) : "";

  // legend
  fill(200, 50, 50, 100);
  text("Facbook Post Time", 0, 200 * 2.5);
  // Act
  arcsDump.length !== arcs.length && arcsDump.length > 0 ? Act(arcsDump[arcsDump.length - 1].h, 2) : "";
  // All
  arcsDump.forEach(obj => {
    Arc(obj.h, obj.m, 2);
  });
}
let arrayBar = (array) => {
  for (let i = 0; i < array.length; i++) {
    let x = i / array.length * (width - 2);
    stroke(200, 50, 50, 10);
    line(x, 0, x, 50);
  }

}
let Arc = (_h, _m, _size, _t) => {
  let rad = (((_h % 24) + (_m / 60)) / 24) * 2 * 3.141592653;
  let rad1 = (_h % 24 / 24) * 2 * 3.14;
  push()
  translate(0, 0);
  rotate(rad);
  _t ? stroke(100, 100, 200, 125) : stroke(200, 50, 50, 25 - _m / 4);
  strokeWeight(2 * _size / 1.5);
  line(0, -80 * _size, 0, -100 * _size);
  strokeWeight(0);
  pop();
  push();
  translate(0, 0);
  rotate(rad1);
  textSize(16 * _size);
  textAlign(CENTER);
  _t ? fill(255, 0, 0, 255) : fill(0, 1);
  text(_h, 0, -130 * _size);
  pop();
}
let Act = (_h, _size) => {
  let rad = (_h % 24 / 24) * 2 * 3.14;
  push();
  translate(0, 0);
  rotate(rad);
  stroke(90, 90, 200, 200);
  strokeWeight(3 * _size / 1.5);
  line(0, -80 * _size, 0, -103 * _size);
  strokeWeight(0);
  // line(0, 0 * _size, 0, -120 * _size);
  strokeWeight(0);
  textSize(16 * _size);
  textAlign(CENTER);
  fill(60, 100, 255, 255);
  text(_h, 0, -130 * _size);
  pop();
}


const Choose = (array) => {
  let e = Math.floor(constrain(map(mouseX, 0, width, 0, array.length), 0, array.length)) + 1;
  if (height > width) {
    e = Math.floor(constrain(map(height - mouseY, 0, height, 0, array.length), 0, array.length)) + 1;
  }
  if (ee != e) {
    sound.rate(1 + Math.random() / 100);
    sound.play();
    ee = e;
  }
  return array.slice(e > 100 ? e - 100 : 0, e);
}