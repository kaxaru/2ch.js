var generator = sequence(10, 3);
var generator2 = sequence(7, 1);


function sequence(start, step){
	var i =0;
        var step = step || 1;
        var start = start || 0;
	return function(){
		var answer =  start + step * i; i++; return answer; 
	}
}


console.log(generator());
console.log(generator2());