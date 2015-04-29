window.x = 1;
var ctx = { x: 2 };

function testThis(a) { 
	console.log("x=" + this.x + ", a=" + a); 
}

console.log(testThis(100)); // x=1, a=100

var boundFunction = bind(testThis, ctx);

function bind(fnThis, ctx){
	var aArgs = Array.prototype.slice.call(arguments, 2),
		fNOP    = function() {};
	var that = this.apply(this instanceof fNOP && ctx ? this : ctx, aArgs.concat(Array.prototype.slice.call(arguments, 1)));
	return function(el){
		fnThis(el);
	}
}



console.log(boundFunction(100)); // x=2, a= 100

