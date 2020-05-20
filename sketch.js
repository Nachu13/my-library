var objec22, objec11;
function setup() {
  createCanvas(800,400);
  objec22 = createSprite(400, 200, 100, 50);
  objec11 = createSprite(100, 100, 50, 100);
  objec22.shapeColor = "#ddfca7";
  objec11.shapeColor = "#69ffb6";
  objec22.debug = true;
  objec11.debug = true;
}

function draw() {
  background("#9379e0"); 
  objec11.x = World.mouseX;
  objec11.y = World.mouseY; 
  if (isTouching(objec11, objec22)){
    objec22.shapeColor = "#69ffb6";
    objec11.shapeColor = "#ddfca7" ;
  }
  else{
    objec22.shapeColor = "#ddfca7";
  objec11.shapeColor = "#69ffb6";
  }
  
  drawSprites();
}
