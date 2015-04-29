		function sequence(start, step){
			var i = 0;
		        var step = step || 1;
		        var start = start || 0;
			return function(){
				var answer =  start + step * i; i++; return answer; 
			}
		};

        var gen = sequence(1, 1);
        function square(x) { return x * x; };
        function fmap(square, gen){
			return function(){
				return arguments.length > 0 ? square(gen(arguments)) : square(gen())
			}
        }

        var squareGen = fmap(square, gen);

        console.log(squareGen()); // 1
        console.log(squareGen()); // 4
        console.log(squareGen()); // 9
        console.log(squareGen()); // 16

        function add(els){
        	return Array.prototype.reduce.call(els, function(a,b){return a+b})
        }

var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3, 7)); // 144 = (2 + 3 + 7) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2