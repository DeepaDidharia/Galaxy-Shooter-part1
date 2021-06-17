var bgImg;
var sp1Img,sp2Img , sp1 , sp2;
var players;
var coin1Img ,coin1, coin , coinGroup;
var coinGroup;
var a1 , a2 , a3 , a4 , asteriods;
var a1Img , a2Img , a3Img , a4Img;




function preload() {
bgImg = loadImage("Galaxy bg.jpg")
sp1Img = loadImage("SpaceShip 1.png");
sp2Img = loadImage("SpaceShip 2.png");
coin1Img = loadImage("Coin.png");
a1Img = loadImage("Asteriod1.png");
a2Img = loadImage("Asteriod2.png");
a3Img = loadImage("Asteriod3.png");
a4Img = loadImage("Asteriod4.png");

}





function setup() {
  createCanvas(1400,750);

}








function draw() {

  background(bgImg);
sp1 = createSprite(700,650);
sp1.addImage(sp1Img);
sp1.scale=0.2;



if (frameCount % 70 === 0) {
  coin = createSprite(random(100, 1000), 0, 100, 100);
  coin.addImage(coin1Img)
  coin.velocityY = 7;
  coin.scale = 0.04;
  var rand = Math.round(random(1,2));  
}


if (frameCount % 40 === 0) {
  asteriods = createSprite(random(100, 1000), 0, 100, 100);
  asteriods.velocityY = 6;
  asteriods.scale = 0.2;

  var rand = Math.round(random(1,4));
  switch(rand){
      case 1: asteriods.addImage("asteriod1", a1Img);
      break;
      case 2: asteriods.addImage(" asteriod2", a2Img);
      break;
      case 3:  asteriods.addImage("asteriod3", a3Img);
      break;
      case 4: asteriods.addImage(" asteriod4", a4Img);
      break;
      
  }
  
}

movement();
  drawSprites();
}




function movement (){

  if(keyIsDown(37)){
    sp1.velocityX = -4;
  }
  
  if(keyDown(39)){
    sp1.velocityX = 4;
  }   

}




