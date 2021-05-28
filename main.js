sound="";

function preLoad(){
    sound=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,600);
}

function play_song(){
    sound.play_song();
}