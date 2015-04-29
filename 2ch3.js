function square(x) { return x * x; } // возведение в квадрат

var arr = [1, 2, 3];

function map(fn, array){
	var arr = [];
	array.forEach(function(el){
		arr.push(fn(el));
	});
	return arr;
}

console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []


