var diam1=0;


function setup() {
    createCanvas(500,500);
    background("#FFFFFF")

}

function draw() {
    
    background("#000000")
    
    fill("#C32626")
    stroke("#FFFFFF")
    strokeWeight(1)
    ellipse(70,70,diam1,diam1);
    
    fill("#FADB17")
    stroke("#FFFFFF")
    strokeWeight(1)
    ellipse(425,70,diam1,diam1);
    
    fill("#41f44d")
    stroke("#FFFFFF")
    strokeWeight(1)
    ellipse(70,425,diam1,diam1);
    
    fill("#b841f4")
    stroke("#FFFFFF")
    strokeWeight(1)
    ellipse(425,425,diam1,diam1);
    
    fill("#42a7f4")
    stroke("#FFFFFF")
    strokeWeight(1)
    ellipse(250,250,diam1,diam1);
    
    fill("#000000")
    stroke("#FFFFFF")
    strokeWeight(5)
    ellipse(mouseX,mouseY,20,20);
    diam=diam1+5
    
    fill("#FFFFFF")
    strokeWeight(0)
    ellipse(random(width),random(height),2,2);
    console.log(diam1);
   

}
function mousePressed (){
    diam1=diam1+5
}

    
