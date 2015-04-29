var gen2 = sequence(0, 2);

function sequence(start, step){
	var arr = [];
	return function(){
			arr.push(start);
			start = start + step;
			return arr;
	}
}

function take(fn, count){
	while (count > 0) {
		var arr = fn();
		count--;
	}
	return arr;
}

console.log(take(gen2, 5));