status="";
img="";
object=[];

function preload()
{
img=loadImage("dog_cat.jpg");
}

function setup()
{
canvas=createCanvas(640,420);
canvas.center();
object_detector=ml5.objectDetector('cocossd',modalloaded);
document.getElementById("status").innerHTML = "status : detecting objects";
}

function modalloaded()
{
console.log("ml"); 
status=true;
object_detector.detect(img,gotresult);
}

function gotresult(error,results)
{
  if(error){console.log(error);
}  
object=results;
console.log(results);
}

function draw()
{
image(img,0,0,640,420);
if(status!=""){
  for (i=0;i<object.length;i++){

  

fill("red");
text(object[i].label,object[i].x,object[i].y);
noFill();
stroke("red");
rect(object[i].x,object[i].y,object[i].width,object[i].height);}
}}
