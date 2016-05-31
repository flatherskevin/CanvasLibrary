//Canvas Library

var $ = document;

//Canvas attributes object. Create this before using the create function
CanvasAttr{
	canWidth: 0,
	canHeight: 0,
	canID: ""
}

//Creates a canvas using the CanvasAttr attributes
function CreateCanvas(canName){
	newCanvas = $.createElement('canvas'),
	newCanvas.attr("id", canName.canID);
	newCanvas.width(canName.canWidth);
	newCanvas.height(canName.canHeight);
}

//Initializes drawing. Primarily to be used within other functions
function IDContext(ctxID){
	canvas = $.getElementById(ctxID);
	return canvas.getContext('2d');
}
//ctx : canvas element
//x, y: respective cartesian cordinates
//h, w: height and width
//l   : length
function RectCenter(ctxID,x,y,h,w){
	ctx = IDContext(ctxID);
	ctx.beginPath();
	ctx.rect(x - w / 2, y - h / 2, h, w);
};

//Two vertices on base, one vertex directly above. Begins at bottom left vertex
function TriEquilateral(ctxID,x,y,l){
	ctx = IDContext(ctxID);
	h = Math.sqrt(l ^ 2 - (l / 2) ^ 2);
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo((x + l) / 2, y + h);
	ctx.lineTo(x + l, y);
	ctx.lineTo(x, y);
	ctx.closePath();
}

//Right triangle that starts at right angle, and initally draws horizontally (x_1, y_1) and then to (x_2, y_2).
function TriRight(ctxID,x,y,h,w,corner){
	ctx = IDContext(ctxID);
	var x_1, x_2, y_1, y_2;
	switch (corner){
		case "topLeft":
			x_1 = x + w;
			x_2 = x;
			y_1 = y;
			y_2 = y + h;
			break;
		case "topRight":
			x_1 = x - w;
			x_2 = x;
			y_1 = y;
			y_2 = y + h;
			break;
		case "bottomLeft":
			x_1 = x + w;
			x_2 = x;
			y_1 = y;
			y_2 = y - h;
			break;
		case "bottomRight":
			x_1 = x - w;
			x_2 = x;
			y_1 = y;
			y_2 = y - h;
			break;
		default:
			x_1 = x + w;
			x_2 = x;
			y_1 = y;
			y_2 = y + h;
			break;
	}
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x_1, y_1);
	ctx.lineTo(x_2, y_2);
	ctx.lineTo(x, y);
	ctx.closePath();
}

//Isoscelese triangle. Horizontal base with two vertically angled, equal sides. Starts in bottom left
function TriIsosceles(ctxID,x,y,h,w){
	ctx = IDContext(ctxID);
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + w / 2, y + h);
	ctx.lineTo(x + w, y);
	ctx.lineTo(x, y);
	ctx.closePath();
}

function Triangle(ctxID,x,y,x_1,y_1,x_2,y_2){
	ctx = IDContext(ctxID);
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x_1, y_1);
	ctx.lineTo(x_2, y_2);
	ctx.lineTo(x, y);
	ctx.closePath();
}