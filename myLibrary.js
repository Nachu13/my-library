function bounceOff(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
  }
  function isTouching(objec1, objec2){
    if (objec2.x - objec1.x <= objec2.width/2 + objec1.width/2 &&
      objec1.x - objec2.x <= objec2.width/2 + objec1.width/2 &&
      objec2.y - objec1.y<= objec2.height/2 + objec1.height/2 &&
      objec1.y - objec2.y <= objec2.height/2 + objec1.height/2){
     return true;
   }
   else{
     return false;
   }
  }