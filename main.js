mustacheX=0;
mustacheY=0;

function preload() {
  mustache = loadImage('https://i.postimg.cc/KvsDvJT0/curly-black-mustache-cartoon-vector-7217411.jpg');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    mustacheX = results[0].pose.mustache.x;
    mustacheY = results[0].pose.mustache.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(mustache, mustacheX, mustacheY, 80, 35);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
