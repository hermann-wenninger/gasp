var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

//var graph = new Graph(context,-4,4,-10,10,275,210,450,350);
//var graph = new Graph(context,-2.5,2.5,-10,10,275,210,450,350);			
//var graph = new Graph(context,-3,3,0,20,275,380,480,350);
var graph = new Graph(context,-3,3,0,1,275,380,480,350);			
graph.drawgrid(1,0.2,0.2,0.05);	
//graph.drawgrid(1,0.2,5,1);	
//graph.drawgrid(0.5,0.1,2,0.5);				
graph.drawaxes('x','y');

var xA = new Array();
var yA = new Array();
var y1A = new Array();
for (var i=0; i<=100; i++){
	//xA[i] = (i-50)*0.08;
	xA[i] = (i-50)*0.06;				
	//xA[i] = (i-50)*0.05;	
	yA[i] = f(xA[i]);						 				
	//y1A[i] = f(-xA[i]);				
}
graph.plot(xA,yA,'#ff0000',false,true);
//graph.plot(xA,y1A,'#0000ff',false,true);		
graph.plot(xA,y1A,'#0000ff',true,false);
			
function f(x){
	var y;
	y = Math.exp(-x*x);			
	//y = Math.exp(x);
	//y = -0.5*Math.pow(x,5) + 3*Math.pow(x,3) + x*x - 2*x - 3;
	//y = x*x*x + x*x - 2*x - 3;
	//y = x*x - 2*x - 3;
	//y = 2*x + 1;
	return y;
}