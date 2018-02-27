let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}


function main(){
	//console.log('#1 - count sheep');
	//countSheep(5);

	//console.log('#2 - Array Doubler');
	//let arr = [10,5,3,4];
	//console.log(double_all(arr));

	//console.log('#3 - Reverse String');
	//console.log(reverseString("tauhida"));

	//console.log('#4 - nth Triangular Number');
	//console.log(triangle(5));

	//console.log('#5 - String Splitter');
	//console.log(split('1/21/2018', '/'));

	//console.log('#6 - Binary Representation');
	//console.log(convertToBinary(25));

	//console.log('#7 - Anagrams');
	//printAnagram("east");

	//console.log('#8 - animalHierarchy');
	//console.log(traverse(animalHierarchy, null));

	//console.log('#9 - Factorial');
	//console.log(factorial(5)); //120

	//console.log('#10 - Fibonacci');
	//console.log(fibonacci(7));

	console.log('#11 - Organization Chart');
	console.log(traverseA(organization));
	//console.log(traverseB(organization));

}
main()

//best case: O(1), in instance of only 1 item to filter by
//worst case: O(n^(c)) c = size of organization; worst case dependent on the size of hierarchy; and n is dependent on data set size