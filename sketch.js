var towerImg,tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghostImg, ghost;

function preload()
{
  towerImg = loadImage("tower.png")
  doorImg = loadImage("door.png")
  doorsGroup = new Group();
  climberImg = loadImage("climber.png")
  climbersGroup = new Group();
  ghostImg = loadImage("ghost-standing.png")
}
function setup()
{
  createCanvas(600,600);
  tower = createSprite(300,300)
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200,50,50)
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3
}
function draw()
{
  background(0)
  if(tower.y > 400){
    tower.y = 300
  }
  
  spawnDoors();
  drawSprites();
}
function spawnDoors()
{
  if(frameCount%240 === 0)
    {
      var door = createSprite(200,-50)
      door.addImage(doorImg)
      
      var climber = createSprite(200,10);
      climber.addImage(climberImg)
      
      door.x = Math.round(random(120,400))
      door.velocityY = 1
      
      climber.x = door.x
      climber.velocityY = 1
      climber.lifetime = 800
      door.lifetime = 800;
      doorsGroup.add(door)
      climbersGroup.add(climber)
    }
}