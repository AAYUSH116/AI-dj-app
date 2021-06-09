sound="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;


function preLoad(){
    sound=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
    
}

function draw(){
    image(video,0,0,600,500);
    
    fill('#0000FF');
    stroke('#0000FF');
if(score_leftWrist >0.2){
    circle(leftWristX,leftWristY,20);
    InNumber=Number(leftWristY);
    remove_decimals=floor(InNumber);
    leftWristY_divided=remove_decimals/1000;
    volume_2=leftWristY_divided*2;
    document.getElementById("volume").innerHTML="Volume"+volume_2;
    sound.setVolume(volume_2);
}
}

function play(){
    sound.play();
    sound.setVolume(1);
    sound.rate(1);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPose(results){
    if(results.length > 0)
    {
        score_leftWrist=results[0].pose.keypoints[9].score;
        console.log("score_leftWrist"+score_leftWrist);
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX"+leftWristX+"leftWristY"+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX"+rightWristX+"rightWristY"+rightWristY);
    }
    
}