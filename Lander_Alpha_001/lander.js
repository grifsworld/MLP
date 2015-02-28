var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var key = [];
var playerX  = canvas.width/2-100;
var playerY = canvas.height/2-100;
var playerImg = new Image();
playerImg.src = "phill.png";

var uiX = 0;
var uiY = 0;
var opened = false;

var mx = 0;
var my = 0;

var rock = new Image();
rock.src = "Meteor.png";

var energy = 100;

(function(){
document.onkeydown=function(e)
{
    code=window.event?e.keyCode:e.which;
    key[code]=1;
};

function rock(x, y, width, height, sprite){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.sprite = sprite;
	this.img = new Image();
	this.img.src = sprite;
	
}

var rocks = new Array();

for(var i = 0; i < 10; i++){
	rocks[i] = new rock(Math.random()*canvas.width,Math.random()*canvas.height, 50, 50, "Meteor.png");
}

function collide(speed){
	xvel = -xvel*2;
	yvel = -yvel*2;
	if(shield > 0){
		shield -=10;
	}
	if(shield <= 0){
		health -=10;
	} 
}

document.onkeyup=function(e)
{
    code=window.event?e.keyCode:e.which;
    key[code]=0;
    //checking for relase of Z
    if(code == 90){
    opened = !opened;
    //alert("Lander: x: " + x + " y: " + y + "\n Meteor x: " + mx + " y: " + my);
    }
    if(code == 88){
    	collide(10);
    	
    }
};
})();

var xvel = 0;
var yvel = 0;
var velmax = 4;

var health = 100;
var shield = 100;



function controls(){
	//left
	if(key[37]){
		if(xvel > -velmax && energy > 0){
			xvel -= .01;
			energy -= .1;
		}
    }
    //up
    if(key[38]){
    	if(yvel > -velmax && energy > 0){
    	yvel -= .01;
    	energy -= .1;
    	}
    }
    //right
    if(key[39]){
    	if(xvel < velmax && energy > 0){
    	xvel += .01;
    	energy -= .1;
    	}
    }
    //down
    if(key[40]){
    	if(xvel < velmax && energy > 0){
    	yvel += .01;
    	energy -= .1;
    	}
    }
   
}

function AABB(x1, x2, y1, y2, width1, width2, height1, height2){
	if(x1 < x2 + width2 &&
	   x1 + width1 > x2 &&
	   y1 < y2 + height2 &&
	   height1 + y1 > y2){
	   return true;
	}
	
}

function checkCollide(){
	//double check this.
	//return AABB(x, mx, y, my, 480, 281, 240, 286);
	
}

function movement(){
	playerX+=xvel;
	playerY+=yvel;
	uiX+=xvel;
	uiY+=yvel;
}




function update(){
	
	movement();
	//if(checkCollide() == true){
		//alert("collide");
	//}
	if(health <= 0){
		alert("death");
		health = 100;
	}
	if(opened){
   		playerImg.src = "Phil (Open).png";
   		if(energy <= 100){
   			energy += .05;
   		}
   		if(energy >= 100 && shield <= 100){
   			shield += .01;
   		}
   	}
   	if(!opened){
   		playerImg.src = "phill.png";
   		if(energy > 0){
   			if(shield > 0){
   			shield -=.01;
   			}
   			if(shield <= 0){
   				health -=.01;
   				}
   			
   		}
   	}
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.translate(-xvel,-yvel);
ctx.drawImage(space,-8544/2,-5696/2,8544,5696);

ctx.drawImage(playerImg, playerX, playerY, 480, 240);
ctx.drawImage(rock, mx, my, 281, 286);

//draw energy bar
//***********************
//fix the display of the bars
//using their own x and y 
//values rather than those of the player.
//***********************
ctx.fillStyle = "red";
ctx.fillRect(uiX+(canvas.width/2)-(energy*6)/2,uiY+canvas.height-10,energy*6,10);
//Draw health bar
ctx.fillStyle = "green";
ctx.fillRect(uiX+(canvas.width/2)-(health*6)/2,uiY+canvas.height-40,health*6,30);
//draw shield bar
ctx.fillStyle = "blue";
ctx.fillRect(uiX+(canvas.width/2)-(shield*6)/2,uiY+canvas.height-40,shield*6,30);
}


var space = new Image();
space.src = "space.jpg";


setInterval(function(){
draw();
controls();
update();
},5);