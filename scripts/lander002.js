 
 ///Initiating Canvas

//Debug Bool
var debug = true;

//Initializing Variables
//Player Stats
var health = 100;
var energy = 100;
var shield = 100;
//Level Demensions- Not the same as canvas
var roomX = 10000;
var roomY = 2000;
//Velocity direction values
var xvel = 0;
var yvel = 0;
//Acceleration
var globalVel = .01;
//Maximum speed the lander can travel;
var maxVel = 3;

//For keypress Detection and storage
var key = [];

//Bool for mode
var opened = false;


//Player Object
var player = {img:null, x: canvas.width/2, y: canvas.height/2, 
width: 100, height:100, transX: canvas.width/2, transY: canvas.height/2, sprite: "images/phil/Phil (Default).png"};
player.img = new Image();
player.img.src = player.sprite;

//Meteor object
function meteor(x,y, width, height, sprite){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.sprite = sprite;
this.img = new Image();
this.img.src = sprite;
}

//Comet Object
function comet(x,y, width, height, sprite){
	this.x = x;
	this.y =y;
	this.height = height;
	this.width = width;
	this.sprite = sprite;
	this.img = new Image();
	this.img.src = sprite;
}


//Level Box Array
var boundary = new Array();
//Obstacle array
var meteors = new Array();


//Image Variables
var playerImg = new Image();
playerImg.src = "images/phil/Phil (Default).png";

function initMeteors(){
		//meteors.push(new meteor(10,10, 100,100, "Meteor.png"));
		//meteors.push(new meteor(10,100,100,100, "Meteor.png"));
	}

function statBars(){
	//red to draw health
	ctx.fillStyle = "red";
	ctx.fillRect((canvas.width/2)-(energy*6)/2,canvas.height-10,energy*6, 10);
	ctx.fillStyle = "blue";
	ctx.fillRect((canvas.width/2)-(shield*6)/2,canvas.height-20,shield*6, 10);
	ctx.fillStyle = "green";
	ctx.fillRect((canvas.width/2)-(health*6)/2,canvas.height-30,health*6, 10);
	//back to black
	ctx.fillStyle = "black";
	
}
function boundaryCollision(){
	//console.log(player.transX);
if(player.transX+player.width> roomX || player.transX-player.width/2 < 0){
	xvel = -xvel;
}
if(player.transY+player.height > roomY || player.transY-player.height/2 < 0){
	yvel = -yvel;
}

}

function obstacleCollision(image1, image2){
	
    var mx1 = image1.x;
    var Mx1 = image1.x + image1.width;
    var my1 = image1.y;
    var My1 = image1.y + image1.height;
    var mx2 = image2.x;
    var Mx2 = image2.x + image2.width;
    var my2 = image2.y;
    var My2 = image2.y + image2.width;
	
	// 0 <= x < 1, 0 <= y < 1
    if(0 <= Math.abs(xvel) < 1 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          image1.x = 1800;
          image1.y = 350;
        
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 10;
          else if(shield <= 0) health -= 10;
          image1.x = 1800;
          image1.y = 350;
       }  
    
    //0 <= x < 1, 1 <= y < 2    
    }else if(0 <= Math.abs(xvel) < 1 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
       } 
    
    //1 <= x < 2, 0 <= y < 1   
    }else if(1 <= Math.abs(xvel) < 2 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
       }
    
    //1 <= x < 2, 1 <= y < 2
    }else if(1 <= Math.abs(xvel) < 2 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 20;
          else if(shield <= 0) health -= 20;
          image1.x = 1800;
          image1.y = 350;
       }
    //0 <= x < 1, 2 <= y < 3
    }else if(0 <= Math.abs(xvel) < 1 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
       }
    
    //1 <= x < 2, 2 <= y 3
    }else if(1 <= Math.abs(xvel) < 2 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
       }
    
    //2 <= x < 3, 2 <= y < 3
    }else if(2 <= Math.abs(xvel) < 3 && 2 <= Math.abs(yvel) < 3){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
       }
    
    //2 <= x < 3, 1 <= y < 2
    }else if(2 <= Math.abs(xvel) < 3 && 1 <= Math.abs(yvel) < 2){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
       }
    
    //2 <= x < 3, 0 <= y < 1
    }else if(2 <= Math.abs(xvel) < 3 && 0 <= Math.abs(yvel) < 1){
       if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 30;
          else if(shield <= 0) health -= 30;
          image1.x = 1800;
          image1.y = 350;
       }
    
    // x = 3 or y = 3
    }else if(Math.abs(xvel) == 3 || Math.abs(yvel) == 3){
    	if(mx1 >= mx2 && mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          image1.x = 1800;
          image1.y = 350;
        
       }else if(mx1 >= mx2 && mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && my1 >= my2 && my1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          image1.x = 1800;
          image1.y = 350;
          
       }else if(Mx1 >= mx2 && Mx1 <= Mx2 && My1 >= my2 && My1 <= My2){
          if (shield > 0) shield -= 40;
          else if(shield <= 0) health -= 40;
          image1.x = 1800;
          image1.y = 350;
       }
    }
}

var Xdis;
var Ydis;
var sqx;
var sqy;
var sqh;
var Hdis;
var speed;
var angle;
var cosp;
var sinp;
var Xspeed;
var Yspeed;

var disToXena;

var landerRotate = 0;
//Update Function
function update(){
	//Updating virtual player location data
	player.transX += xvel;
	player.transY += yvel;
	
	//Moving Xena in relation to player
	xena.x -= xvel;
	xena.y -= yvel;
	
	//Updating the array that surrounds the level
		for(var i = 0; i < boundary.length; i++){
			var obj = boundary[i];
			obj.x -= xvel;
			obj.y -= yvel;
		}
	//updating the array for obstacle meteors
	for(var i = 0; i < meteors.length; i++){
		
			obj = meteors[i];
			Xdis = player.x - obj.x;
			Ydis = player.y - obj.y;
			sqx = Math.pow(Xdis, 2);
			sqy = Math.pow(Ydis, 2);
			sqh = sqx + sqy;
			Hdis = Math.sqrt(sqh);
			speed = 220/Hdis;
		    angle = Math.atan2(Ydis, Xdis);
			cosp = Math.cos(angle);
			//console.log(cosp);
			Xspeed = speed * cosp;
			sinp = Math.sin(angle);
			//console.log(sinp);
			Yspeed = speed * sinp;
			obj.x += Xspeed - xvel;
			obj.y += Yspeed - yvel;
			obstacleCollision(obj,player); 
			//obj.x++;

		}
		boundaryCollision();
		modeUpdate();
		disToXena = -(player.transX + player.width - roomX + (roomY/2) + 200);
		//Logic for comet collision
		//if player is within 500 pixles of xena
		if(disToXena < 400){
			
			landerRotate = 180-((disToXena * 180)/(400));
			if(landerRotate > 180){
				landerRotate = 180;
			}
		}
		if(-disToXena-200 >= 0){
			console.log("Contact");
		}
}

function modeUpdate(){
	if(opened){
		if(energy <= 100){			
		energy += .5;
		}
		if(energy >= 100){
			if(shield <= 100){
				shield += .05;
				
			}
		}
	}
}

function dirVelocity(dir, speed){
	if(dir == "left"){
		if(xvel > -maxVel){
		energy -= .1;
		xvel -= speed;	
		}
		
	}
	if(dir == "right"){
		if(xvel < maxVel){
			energy -= .1;
			xvel += speed;
		}
		
	}
	if(dir == "up"){
		if(yvel > -maxVel){
			energy -= .1;
		yvel -= speed;	
		}
		
	}
	if(dir == "down"){
		if(yvel < maxVel){
			energy -= .1;
			yvel += speed;
		}
		
	}
}

function modeSwitch(){
	opened = !opened;
	if(opened){
		player.img.src = "images/phil/Phil (Open).png";
	}
	if(!opened){
		player.img.src = "images/phil/Phil (Default).png";
	}
	if(debug){
		console.log("Opened set to " + opened);
	}
	
}



function makeBoundary(){
	//top
	for(var i = 1; i < roomX/50; i++){
		boundary.push(new meteor(i*50,0, 50,50, "images/meteors/Meteor.png"));

	}
	//bottom
	for(var i = 1; i < roomX/50; i++){
		boundary.push(new meteor(i*50,roomY, 50,50, "images/meteors/Meteor.png"));
		
	}
	
	//left
	for(var i = 0; i < (roomY+50)/50; i++){
		boundary.push(new meteor(0,i*50,50,50,"images/meteors/Meteor.png"));
		
	}
	//right
	//this side is going to be the side
	// that you need to land on
	//eventually I will put this in a function or somthing
	//but for now I'm going to write the code in draw/update to figure
	//out how stuff works.
	/*
	for(var i = 0; i < (roomY+50)/50; i++){
		boundary.push(new meteor(roomX,i*50,50,50,"Meteor.png"));
		
	}*/
	
}
//Control setting
function controls(){
	//If you only want the function to happen once per keypress
	//Put it within the document.onkeydown functions
	//else, if you want something like continues movement
	//while a key is pressed, put it outside the functions.
	//check keyup
document.onkeydown=function(e)
{
    code=window.event?e.keyCode:e.which;
    key[code]=1;
};

//Key down Checking Function
document.onkeyup=function(e){
	code=window.event?e.keyCode:e.which;
	key[code] = 0;
	//Mode Switch
	if(code == 27)
	{
		console.log("escape key pressed");
		if(paused == false)
		{
			paused = true;
		}
		else
		{
			paused = false;
		}
		
	}
	if(code == 90 && !paused){
		modeSwitch();
	}
	
};
//For movement
	//left
	if(key[37]){
		if(energy > 0){
		dirVelocity("left", globalVel);	
		}
		
	}
	//right
	if(key[39]){
		if(energy > 0){
		dirVelocity("right", globalVel);
		}
	}
	//up
	if(key[38]){
		if(energy > 0){
		dirVelocity("up", globalVel);
		}
	}
	//down
	if(key[40]){if(energy > 0){
		dirVelocity("down", globalVel);
	}
	}
	
	if(key[90]){
		
	}
}
var rotate = 1;
xena = new comet(roomX+(roomY/2),roomY/2, 0, 0, "images/meteors/Meteor.png");

function draw(){
	//The order things are listed here is the order they're drawn,
	//first to last. We should probably put all images to be drawn
	//into an array for better management, and layer control
//Clear Rect is a better way of doing width=width, clears the screen
//for drawing fresh.
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillRect(0,0, canvas.width, canvas.height);

ctx.save();
ctx.translate((canvas.width/2)+(player.width/2), (canvas.height/2)+player.height/2);
ctx.rotate(-landerRotate*Math.PI/180);
ctx.drawImage(player.img, player.x-canvas.width/2-player.width/2, player.y-canvas.height/2-player.height/2,player.width,player.height);
ctx.restore();
//ctx.drawImage()


for(var i = 0; i < meteors.length; i++){
var obj = meteors[i];
ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
}

for(var i = 0; i < boundary.length; i++){
var obj = boundary[i];
ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
}

//drawing the comet
ctx.beginPath();
ctx.arc(xena.x-roomY/2,xena.y+25,roomY/2,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "#FFFF99";
ctx.fill();


//HOW TO ROTATE STUFF
/*
ctx.save();
ctx.translate(canvas.width/2,canvas.height/2);
ctx.rotate(rotate*Math.PI/180);
for(var i = 0; i < boundary.length; i++){
var obj = boundary[i];
ctx.drawImage(obj.img,obj.x-canvas.width/2,obj.y-canvas.height/2,obj.width,obj.height);
}
ctx.restore();
if(rotate < 90){
	rotate+= .1;
}
*/
statBars();

//this draws a meteor
//ctx.drawImage(rock.img,10,10,100,100);
}


//Launched on load
function game(){

console.log("in game");

setInterval(function(){

if(!paused)
{
	
controls();
update();
draw();
}
},5);
}
