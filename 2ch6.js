

function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
var test1_3 = partial(test, 1, undefined, 3);
function argToArr(arg, index){
	return [].slice.call(arg, index)
}

function partial(fn){
	var partitialArr = argToArr(arguments, 1),
		keys = [];
	for(var i = 0, n = partitialArr.length; i < n; i++){
		if(partitialArr[i] === undefined){
			keys.push(i);
		}
	}
	return function(){
		var currentArr = argToArr(arguments, 0),
		step = 0;
		keys.map(function(el){
			partitialArr[el] = currentArr[step];
			step++;
		});
		return fn.apply(this, partitialArr);
	}
}

console.log(test1_3(5)); // a=1,b=5,c=3