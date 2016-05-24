var FOH, blackFig, tyler, redFig, boobs, dom, blood, staz, loopy, baptism;

var logo1;

var off = false;
var on = true;

function preload(){
  FOH = createVideo(['ak/FOH480.mov']);
  blackFig = createVideo(['weirdSituations/blackFig480.mov']);
  redFig = createVideo(['weirdSituations/redFig480.mov']);
  tyler = createVideo(['tyler/tyler480.mov']);
  boobs = createVideo(['boobs/boobs480.mov']);
  dom = createVideo(['dominatrix/dom1480.mov']);
  blood = createVideo(['blood/blood480.mov']);
  staz = createVideo(['staz/staz480.mov']);
  loopy = createVideo(['lucian/lucian480.mov']);
  baptism = createVideo(['baptism/baptism480.mov']);
  
 logo1 = loadImage("currentProjects/currentProjects.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	FOH.loop();                      
	FOH.hide();
	FOH.volume(off);
	
	blackFig.loop();
	blackFig.hide();
	blackFig.volume(off);

	redFig.loop();
	redFig.hide();
	redFig.volume(off);
	
	tyler.loop();
	tyler.hide();
	tyler.volume(off);
	
	boobs.loop();
	boobs.hide();
	boobs.volume(0);
	
	dom.loop();
	dom.hide();
	dom.volume(0);
	
	blood.loop();
	blood.hide();
	blood.volume(0);
	
	staz.loop();
	staz.hide();
	staz.volume(0);
	
	loopy.loop();
	loopy.hide();
	loopy.volume(0);
	
	baptism.loop();
	baptism.hide();
	baptism.volume(0);
}

function draw(){
	

push ();
fill(241,255,1);
stroke(0);
	image(blackFig,0,0,windowWidth/5,windowHeight/5);
text("1",(windowWidth/5)-100,(windowHeight/5)-100);
// rect(0,0,windowWidth/5,windowHeight/5);
pop();

push()
fill(241,107,9);
stroke(0);
	image(redFig,0,windowHeight/5,windowWidth/5,windowHeight/5);
text("2",(windowWidth/5)-100,(windowHeight/5)+100);
// rect(0,windowHeight/5,windowWidth/5,windowHeight/5);
pop();

push()
noFill();
stroke(0);
	image(baptism,0,(windowHeight/5)*2,windowWidth/5,windowHeight/5);
text("3",(windowWidth/5)-100,(windowHeight/5)+200);
// rect(0,(windowHeight/5)*2,windowWidth/5,windowHeight/5);
pop();

push();
noFill();
stroke(0);
	image(dom,0,(windowHeight/5)*3,windowWidth/5,windowHeight/5);
text("4",(windowWidth/5)-100,(windowHeight/5)+400);
// rect(0,(windowHeight/5)*3,windowWidth/5,windowHeight/5);
pop();

push();
fill(0);
stroke(0);

text("5",(windowWidth/5)-100,(windowHeight/5)+600);
rect(0,(windowHeight/5)*4,windowWidth/5,windowHeight/5);
	image(logo1,0,(windowHeight/5)*4,(windowWidth/5),(windowHeight/5) );
pop();





push();
fill(0);
stroke(255);
	image(tyler,windowWidth/5,0,(windowWidth/5)*2.5,(windowHeight/5)*2);
text("6",windowWidth/2,windowHeight/5);
// rect(windowWidth/5,0,(windowWidth/5)*2.5,(windowHeight/5)*2);

pop();

push();
fill(0);
stroke(255);
	image(boobs,windowWidth/5,(windowHeight/5)*1.75,(windowWidth/5)*2.5,(windowHeight/5)*1.25);
text("7",(windowWidth/5)+300,(windowHeight/5)+200);
// rect(windowWidth/5,(windowHeight/5)*1.75,(windowWidth/5)*2.5,(windowHeight/5)*1.25);
pop();


push();
fill(0);
stroke(255);
	image(FOH,windowWidth/5,(windowHeight/5)*3,(windowWidth/5)*2.5,(windowHeight/5)*2);
text("8",windowWidth/2,windowHeight-100);
// rect(windowWidth/5,(windowHeight/5)*3,(windowWidth/5)*2.5,(windowHeight/5)*2);
pop();





push();
noFill();
stroke(0);
	image(blood,(windowWidth/5)*3.5,0,(windowWidth/5)*2,(windowHeight/5)*2);
text("9",windowWidth-100,(windowHeight/5)-100);
// rect((windowWidth/5)*3.5,0,(windowWidth/5)*2,(windowHeight/5)*2);
pop();


push();
noFill();
stroke(0);
	image(staz,(windowWidth/5)*3.5,(windowHeight/5)*2,(windowWidth/5)*2,(windowHeight/5)*1.5);
text("10",windowWidth-100,windowHeight/2);
// rect((windowWidth/5)*3.5,(windowHeight/5)*2,(windowWidth/5)*2,(windowHeight/5)*1.5);
pop();




push();
noFill();
stroke(0);
	image(loopy,(windowWidth/5)*3.5,(windowHeight/5)*3.5,(windowWidth/5)*2,(windowHeight/5)*1.5);
text("11",windowWidth-100,windowHeight-100);
rect((windowWidth/5)*3.5,(windowHeight/5)*3.5,(windowWidth/5)*2,(windowHeight/5)*1.5);
pop();


}



function mousePressed(){
	if (mouseX>0 && mouseX<(windowWidth/5) && mouseY>0 && mouseY<(windowHeight/5)){
		blackFig.volume(on);
	}else{
		blackFig.volume(off);
	}
	
	
	if(mouseX>0 && mouseX<windowWidth/5 && mouseY>windowHeight/5 && mouseY<(windowHeight/5)*2){
		redFig.volume(on);
	}else{
		redFig.volume(off);
	}
	
	if(mouseX>0 && mouseX<windowWidth/5 && mouseY>(windowHeight/5)*2 && mouseY<(windowHeight/5)*3){
		baptism.volume(on);
	}else{
		baptism.volume(off);
	}
	
	if(mouseX>0 && mouseX<windowWidth/5 && mouseY>(windowHeight/5)*3 && mouseY<(windowHeight/5)*4){
		dom.volume(on);
	}else{
		dom.volume(off);
	}
	
	// if(mouseX>0 && mouseX<windowWidth/5 && mouseY>(windowHeight/5)*4 && mouseY<(windowHeight/5)*5){
		//current projects
	// }else{
		
	// }

	if(mouseX>windowWidth/5 && mouseX<(windowWidth/5)*3.5 && mouseY>0 && mouseY<(windowHeight/5)*2){
		tyler.volume(on);
	}else{
		tyler.volume(off);
	}

	if(mouseX>windowWidth/5 && mouseX<(windowWidth/5)*3.5 && mouseY>(windowHeight/5)*2 && mouseY<(windowHeight/5)*3.25){
		boobs.volume(on);
	}else{
		boobs.volume(off);
	}
	
	if(mouseX>windowWidth/5 && mouseX<(windowWidth/5)*3.5 && mouseY>(windowHeight/5)*3 && mouseY<windowHeight){
		FOH.volume(on);
	}else{
		FOH.volume(off);
	}
	
	if(mouseX>(windowWidth/5)*3.5 && mouseX<windowWidth && mouseY>0 && mouseY<(windowHeight/5)*2){
		blood.volume(on);
	}else{
		blood.volume(off);
	}
	
	if(mouseX>(windowWidth/5)*3.5 && mouseX<windowWidth && mouseY>(windowHeight/5)*2 && mouseY<(windowHeight/5)*3.5){
		staz.volume(on);
	}else{
		staz.volume(off);
	}
	
	if(mouseX>(windowWidth/5)*3.5 && mouseX<windowWidth && mouseY>(windowHeight/5)*3.5 && mouseY<windowHeight){
		loopy.volume(on);
	}else{
		loopy.volume(off);
	}
}



