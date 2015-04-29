function type(el){
	var str = Object.prototype.toString.call(el)
	return Array.prototype.slice.call(str, 8, str.length-1).join('').toLowerCase();
}

console.log(type(2));
console.log(type('d'));
console.log(type(true));
console.log(type([]));
console.log(type({}));
console.log(type(Function));
console.log(type(undefined));
console.log(type(null));