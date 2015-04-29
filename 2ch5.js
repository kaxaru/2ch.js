function add(a, b) { return a + b; }
function mult(a, b, c, d) { return a * b * c * d; }
function argToArr(arg, index){
	return [].slice.call(arg, index)
}
function partial(fn){
		var partitialArr = argToArr(arguments, 1);
		if(fn.length > partitialArr.length){
			var partitial = partitialArr;
		} 
	return function(){
		var arr = argToArr(arguments, 0);
		if(partitial !== 'undefined'){
			Array.prototype.push.apply(arr, partitial);
			return fn.apply(this, arr);
		} else {
			return fn(arguments);
		}
	}
}


var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6