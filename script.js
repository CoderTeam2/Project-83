var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var last_posX, last_posY, current_posX, current_posY = 0;
var mouseEvent = "";
var color = "black";
var line_width = 2;
var newWidth = screen.width - 70;
var newHeight = screen.height - 300;

if(screen.width < 90){
    canvas.width = newWidth;
    canvas.height = newHeight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("mousedown", down);
function down(e){
    last_posX = e.clientX - canvas.offsetLeft;
    last_posY = e.clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    line_width = document.getElementById("width").value;
    mouseEvent = "MOUSE_DOWN";
}
canvas.addEventListener("mousemove",draw)
function draw(e){
    current_posX = e.clientX - canvas.offsetLeft;
    current_posY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "MOUSE_DOWN"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_posX,last_posY);
        ctx.lineTo(current_posX,current_posY);
        ctx.stroke();
    }
    last_posX = current_posX;
    last_posY = current_posY;
}
canvas.addEventListener("mouseleave",leave)
function leave(){
    mouseEvent = "MOUSE_LEAVE";
}
canvas.addEventListener("mouseup",up)
function up(){
    mouseEvent = "MOUSE_UP";
}
canvas.addEventListener("touchmove",touch_draw)
function touch_draw(e){
    current_posX = e.touches[0].clientX - canvas.offsetLeft;
    current_posY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(last_posX,last_posY);
    ctx.lineTo(current_posX,current_posY);
    ctx.stroke();
    last_posX = current_posX;
    last_posY = current_posY;
}
canvas.addEventListener("touchstart",touch_start)
function touch_start(e){
    color = document.getElementById("color").value;
    line_width = document.getElementById("width").value;
    last_posX = e.touches[0].clientX - canvas.offsetLeft;
    last_posY = e.touches[0].clientY - canvas.offsetTop;
}
function clearCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}