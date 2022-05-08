objects=[]
status1=""
function preload(){
video=createVideo("video.mp4")    
}
function setup(){
canvas=createCanvas(600,400) 
canvas.center()
video.hide()
}
function draw(){
image(video,0,0,600,400)   
if(status1!="")
{
objectdetecter.detect(video,gotresult) 
for(var i=0;i<objects.length;i++){
    fill("red")
    
    object_name=objects[i].label
    object_percentage=floor(objects[i].confidence*100)+"%"
    objectx=objects[i].x
    objecty=objects[i].y
    objectwidth=objects[i].width
    objectheight=objects[i].height
    text(object_name+" "+ object_percentage,objectx,objecty)
    noFill()
    stroke("red")
    rect(objectwidth,objectheight,objectx,objecty)
}
} 
}
function gotresult(error,result){
if(error){
console.error(error)    
}
console.log(result)
objects=result;
}
function start(){
objectdetecter=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="status:detecting objects"
 }
function modelLoaded(){
console.log ("modelLoaded")
status1=true
video.loop()
video.speed(1)
video.volume(1)
}