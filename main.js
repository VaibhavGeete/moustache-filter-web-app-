NoseX=0;
NoseY=0;

function preload()
{
moustache=loadImage('https://i.postimg.cc/YCd3Srqb/moustache-png.png');
}

function draw()
{
    image(video,0,0,300,300);
    image(moustache,NoseX-25,NoseY+5,50,20);
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initalized");
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    console.log("nose x= "+results[0].pose.nose.x);
    console.log("nose y= "+results[0].pose.nose.y);
    NoseX=results[0].pose.nose.x;
    NoseY=results[0].pose.nose.y;
}
}

function check()
{
    save('vaibhav.png');
    
}