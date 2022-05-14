screen_width = 0;
screen_height = 0;
draw_apple = "";
apple = "";
speak_data = "";
to_number = "";
content = "";

function start () {
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
  }

function setup() {
screen_width = window.innerWidth;
screen_height = window.innerHeight;
canvas = createCanvas(screen_width, screen_height-150);
canvas.center();
background("white");
}
function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}
function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
function preload() {
apple = loadImage('apple.png');
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.onresult = function(event) {
to_number = Number(content);
if(Number.isInteger(to_number)) 
 {
  document.getElementById("status").innerHTML = "Started drawing apple";
  draw_apple = "set";
  }
    else {
      document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    }
console.log(event); 
 
content = event.results[0][0].transcript;
 
to_number = Number(content);
  
var SpeechRecognition = window.webkitSpeechRecognition; 
}