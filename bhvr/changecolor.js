var lttrs = document.getElementById('lttrs');
lttrs.style.color = 'white';
lttrs.style.opacity = 1;

//function for change opacity (object, 'increase' or 'decrease', name of timing variable)
// use within function(){} if in setInterval
function changeOpacity( obj, order,variable){
	if(order == 'reduce') {
		obj.style.opacity = obj.style.opacity - 0.1;
		if (obj.style.opacity == 0) {	
			window.clearInterval(variable);
			obj.style.display = 'none';
			//alert('cleared');
		}
	} else if (order === 'increase') {
		obj.style.opacity = obj.style.opacity - 0 + 0.05;
		if(obj.style.opacity == 1) window.clearInterval(variable);
	}
}

function changeColor() {
	if (lttrs.style.color == 'white') {
		lttrs.style.color = 'black';
	} else {
		lttrs.style.color = 'white';
	}
}

var col =  setInterval(changeColor,150);

/*var op_flag = "visible";
var col = setInterval(function() {
	if (lttrs.style.opacity > 0 && op_flag == "visible") {
		alert('work reduce');
		var reduce_op = setInterval(function() {
			changeOpacity(lttrs,'reduce',reduce_op);
			lttrs.style.display = 'block';
		},50);
		//lttrs.style.display = 'block';
		op_flag = "hidden";
	} else if (lttrs.style.opacity < 1 && op_flag == "hidden") {
		alert('work increase');
		var increase_op = setInterval( function() {
			//alert('work interval');
			changeOpacity(lttrs,'increase',increase_op);
		},50);
		op_flag = "visible";
	}
}, 500);*/

lttrs.addEventListener('click', function() {
	window.clearInterval(col);
	lttrs.style.color = 'white';
	//lttrs.style.opacity =1;
	var opacityChange = setInterval( function(){
		changeOpacity(lttrs,'reduce',opacityChange);
		},150);
	var energy = document.getElementById('energy');
	energy.style.opacity = 0;
	energy.style.display = 'block';
	var energyOpChng = setInterval( function() {
		changeOpacity(energy,'increase',energyOpChng);
		}, 200);
	var phil = document.getElementById('philos');
	phil.style.opacity = 0;
	phil.style.display = 'block';	
	setTimeout(function() {
		var philOpChng = setInterval( function() {
		changeOpacity(phil,'increase',philOpChng);
		}, 200);
		},2000);
	var phys = document.getElementById('phys');
	phys.style.opacity = 0;
	phys.style.display = 'block';	
	setTimeout( function() {
		var physOpChng = setInterval( function() {
		changeOpacity(phys,'increase',physOpChng);
		}, 200);
		},4000);
	setTimeout( function() {
		var i = 0;
		var col_val = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
		document.body.style.backgroundColor = '#000000';
		var backgroundLighter = setInterval( function() {
				//alert('work lighter ' + i + ' ' + document.body.style.backgroundColor + ' ' + col_val[i] );
				if(col_val[i] == 'F') {
					clearInterval(backgroundLighter);
				}
				if(i==9) {
					energy.style.display = 'none';
					phil.style.display = 'none';
					phys.style.display = 'none';
				}
				document.body.style.backgroundColor = '#'+col_val[i]+''+col_val[i]+''+col_val[i]+''+col_val[i]+''+col_val[i]+''+col_val[i];	
				i++;
				//alert('i value ' + i);
				},100);
		},7000);
	setTimeout( function() {
		lttrs.innerHTML = "ARTEM ZAITSEV";
		lttrs.style.color = 'black';
		lttrs.style.display = 'block';
		var lttrsAppear = setInterval( function() {
			changeOpacity(lttrs,'increase',lttrsAppear);
			//alert(lttrs.style.opacity);
			},100);
		var drawing = setInterval(function() {
			drawLines(lcnvs,lcntxt);
			drawLines(rcnvs,rcntxt);
			}, 800); 
		},8500);
	}
); 

var lcnvs = document.getElementById('lcnvs'),
	rcnvs = document.getElementById('rcnvs'),
	lcntxt =lcnvs.getContext('2d'),
	rcntxt = rcnvs.getContext('2d');
lcnvs.width = rcnvs.width = document.documentElement.clientWidth/4;
lcnvs.height = rcnvs.height = document.documentElement.clientHeight;
lcntxt.strokeStyle = rcntxt.strokeStyle =  'black';

function drawLines(cnvs,cntxt) {
	var x = cnvs.width/(Math.random()*10)+5;
	var y = (Math.random() > 0.5)?cnvs.height:0;
	var direction = (y!=0)?'up':'down';
	var draw = setInterval( function() {
		cntxt.moveTo(x,y);
		if(direction == 'down'){
			y+=10;
			} else y-=10;
		cntxt.lineTo(x,y);
		cntxt.stroke();
		if (y > cnvs.height || y<0) {
			clearInterval(draw);
			}
		},100);
}
