x = 0;
y = 0;
drawCircle = "";
drawRect = "";

var fala_pao_api = window.webkitSpeechRecognition;


var recognition = new fala_pao_api();

function start()
{
document.getElementById("status").innerHTML = "pode falar";
recognition.start();
}
recognition.onresult = function(event)
{
 console.log(event); 


 var content = event.results[0][0].transcript;

 document.getElementById("status").innerHTML = "você falou "  + content;
 if(content =="círculo") 
 
 {
x = Math.floor(Math.random() * 900);
y = Math.floor(Math.random() * 600);
document.getElementById("status").innerHTML = "desenhando círculo";
drawCircle = "set";

 }
 if(content =="retângulo") 
 
 {
x = Math.floor(Math.random() * 900);
y = Mathdocument.getEl.floor(Math.random() * 600);
ementById("status").innerHTML = "desenhando retângulo  ";
drawRect = "set";

 }
}
function setup() {   canvas = createCanvas(900, 600); }



function draw() {
    if(drawCircle == "set") 
    
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "foi feito um círculo";
        drawCircle = "";
    }
}
if(drawRect == "set") 
    
{
    rect(x, y, 70, 50);
    document.getElementById("status").innerHTML = "foi feito um retangulo";
    drawRect = "";
}
