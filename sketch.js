let sound, amplitude;

function preload() {
  sound = loadSound("RedWingBlackBirdisolated.wav");
}

function setup() {
  
  let cnv = createCanvas(400,400);
  cnv.mouseClicked(togglePlay);

  amplitude = new p5.Amplitude();

}

function draw() {
  
  background(0);
  noStroke();

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 100);
  
  
  //Wing
  fill(0)
  ellipse(width/2, height/2, size*100, size*100);
  fill('#F44336');
  ellipse(width/2, height/2, size*85, size*85);
  
  fill('yellow')
  ellipse(width/2, height/2, size*75, size*75);
  
  //Belly
  
  fill('rgb(39,39,35)')
  ellipse(width/2, height/2, size*70, size*70);
  
  //Beak
  
  fill('rgb(122,122,113)')
  ellipse(width/2, height/2, size*10, size*10);

    
      
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}