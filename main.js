noseX = 0;
noseY = 0;
difference = 0;
RW = 0;
LW = 0;
function setup()
{
  video = createCapture(video);
  video.size(550,550);

  canvas = createCanvas(550,550);
  canvas.position (550,510);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotposes()
{
    if (result.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX + "noseY = "+ noseY );

        RW = results[0].pose.rightWrist.x;
        LW = results[0].pose.leftWrist.x;
        difference = floor(RW - LW);
        console.log("Right_Wrist = "+ RW + "Left_Wrist = " + LW + "Difference = " + difference);
    }
    
}

function draw()
{
    background ('#969A97');
    document.getElementById("square_side").innerHTML = "Width and Hight of a Square will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    squre( noseX, noseY, difference);
}
