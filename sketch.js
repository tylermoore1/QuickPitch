let x;
let y;

let row1,row2,row3,row4,row5;
let col1,col2;

let r1,r2,r3,r4;
let spacing, q, deviderLine;

let bg_gray;
let white_color;
let dark_blue;
let selection;

let answers;

function setup() {
    createCanvas(1600,700);

	answers = [3,3,3,3,3,3,3,3,3,3];
	x=100;
	y=100;

	col1 = 100;
	col2 = 550;

	row1=150;
	row2=260;
	row3=370;
	row4=480;
	row5=590;


	r1 = 35;
	r2 = 30;
	r3 = 20;
	r4 = 10;

	spacing = 45;
	deviderLine = 1000;
	white_color = color("white");
  dark_blue = color("#3c4858");
	bg_gray = color("#dcdcdc");

}

function draw() {
    white_color.setAlpha(255)
	background(bg_gray);

	//some accent marks, need to add pictures
	push()
	stroke(white_color)
	strokeWeight(60);
	line(deviderLine,0,deviderLine,700)
	line(0,30,1600,30)
	pop()


	drawAllQuestions()	// draws bubbles, and text
	drawAnswers()		// fills in selected bubbles
	drawRadar();		// computes radar chart based on answers
						//there is also "mouseClicked" which updates the canvas whenever the mouse is clicked.
}




/////////////////////////////////////////////////////////////////////
function drawBubbles(){
	push();


	stroke(0);
	strokeWeight(3);
	fill(255);

	ellipse(0,0,r1,r1);
	ellipse(spacing,0,r2,r2);
	ellipse(spacing*2,0,r3,r3);
	ellipse(spacing*3,0,r4,r4);
	ellipse(spacing*4,0,r3,r3);
	ellipse(spacing*5,0,r2,r2);
	ellipse(spacing*6,0,r1,r1);

	pop();
}


function drawAllQuestions(){

	push();
	translate(col1,row1);
	drawBubbles();
	drawQuestion("In 5 years I would like to see myself","Polishing a perfect Project","Working on many projects")
	pop();

	push();
	translate(col1,row2);
	drawBubbles();
	drawQuestion("I like to set my own goals","Disagree","Agree")
	pop();

	push();
	translate(col1,row3);
	drawBubbles();
	drawQuestion("I like to take on as much responsibility as possible ","Disagree","Agree")
	pop();

	push();
	translate(col1,row4);
	drawBubbles();
	drawQuestion("I like to","Work on pre-defined goals","Brainstorm solutions")
	pop();

	push();
	translate(col1,row5);
	drawBubbles();
	drawQuestion("I like to check in with progress","At each step","Over large leaps")
	pop();


	////////////////////////////////////////////////////////////////////////////////////////

	push();
	translate(col2,row1);
	drawBubbles();
	drawQuestion("I like a calm work environment, free of distractions","Disagree","Agree")
	pop();

	push();
	translate(col2,row2);
	drawBubbles();
	drawQuestion("I think that colleagues should...","Become close friends","stay colleagues")
	pop();

	push();
	translate(col2,row3);
	drawBubbles();
	drawQuestion("I like my workspace...","Private","Open")
	pop();

	push();
	translate(col2,row4);
	drawBubbles();
	drawQuestion("In the past, I usually take on a team lead role","Agree","Disagree")
	pop();

	push();
	translate(col2,row5);
	drawBubbles();
	drawQuestion("As work progresses, I think that final goals should...","Remain Defined","Change as needs change")
	pop();
}
function drawQuestion(q,a1,a2){
	textAlign(CENTER)
	text(q,120,-35)
	text(a1,-80,-10,60)
	text(a2,300,-10,60)

}




function mousePressed() {
	if (mouseY-r3 < row1 & mouseY + r3 > row1){
		q=0;
	}
	if (mouseY-r3 < row2 & mouseY + r3 > row2){
		q=1;
	}
	if (mouseY-r3 < row3 & mouseY + r3 > row3){
		q=2;
	}
	if (mouseY-r3 < row4 & mouseY + r3 > row4){
		q=3;
	}
	if (mouseY-r3 < row5 & mouseY + r3 > row5){
		q=4;
	}

	if (mouseX < col2-170 & mouseX > col1-r3){
		selection = floor((mouseX+r3-col1) / spacing)
		answers[q]=selection
	}
	if (mouseX > col2-r3 & mouseX < deviderLine-170){
		selection = floor((mouseX+r3-col2) / spacing)
		answers[q+5] = selection
	}


}


function drawRadar(){

	//answers are [0,6]
	leadershipScore = answers[2] + answers[8] - 6;
	teamworkScore = answers[3] + answers[7] - 6;
	flexibilityScore = answers[0] + answers[9] -6;
	independenceScore = answers[1] + answers[4] -6 ;
	devotionScore	= answers[5] + answers[6] -6;


	//scores normalize answers to [-3,3]
	scores = [leadershipScore/2, teamworkScore/2, flexibilityScore/2, independenceScore/2, devotionScore/2]

	axis = ['Leadership', 'Teamwork', 'Flexibility','Independence','Devotion']


	//along the axis, points are plotted around an average of 6.
	push()
	translate(1300,350) //home location for radar chart

	white_color.setAlpha(180)
	fill(dark_blue)
	stroke(white_color)

	beginShape()
	rotation = -1.57	//align to vertical in radians

		for (s=0; s<5; s++){

			//draw axis and title axis
			push()
			stroke(0)
			strokeWeight(1)
			rotate(rotation)
			line(0,0,130,0)
			for (tick=20;tick <130 ; tick+=20){
				line(tick, -5, tick, 5)
			}


			translate(165,0)
			rotate(-rotation)
			translate(-100,0)
			textAlign(CENTER)
			text(axis[s],100,0)
			pop()


			magnitude = 6+2*scores[s]
			x = cos(rotation) * magnitude*10
			y = sin(rotation) * magnitude*10
			vertex(x, y)
			rotation = rotation+1.25664;


		}


	endShape()
	//pentagon draws on endshape,
	pop()
}

function drawAnswers(){
	for (question = 0; question < 10; question++){
		ans = answers[question]
		if (question < 5){column=col1;}
		else {column=col2;}

		v = question%5;
		if (v==0) row=row1
		if (v==1) row=row2
		if (v==2) row=row3
		if (v==3) row=row4
		if (v==4) row=row5

		fill(0)
		radius = r4

		ellipse(column+(spacing*ans), row,radius,radius)
	}

}
