
var backgroundImg;
var dog;
var foodS;
var foodStock;
var database;
var dogHappy;

function preload()
{

  backgroundImg = loadImage("background.png");
  dogImg = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}
function setup() {
 createCanvas(500,500);
 database = firebase.database()

 dog = createSprite(250,300,150,150);
 dog.addImage(dogImg);
dog.scale = 0.15;

 foodStock = database.ref('food');
 foodStock.on("value",readStock);

}



function draw() {  
 background(255);

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);


  }

drawSprites();
stroke("black");
text("Food remaining: "+ foodS,170,200);
textSize(13);
text("Press Up Arrow Key to feed the dog milk",130,10,300,20);

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }
  else{
    x = x+ 1
  }
database.ref('/').update({
food:x
})

}







