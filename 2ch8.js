var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

function pluck(objects, fieldName) {
	var arr = [];
	objects.map(function(el){
		fieldName in el && arr.push(el[fieldName])
	})
  return arr;
}


console.log(pluck(characters, 'name')); // ['barney', 'fred']