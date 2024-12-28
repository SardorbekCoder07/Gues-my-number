// function myFunction() {
// 	let functionVar = "Bu function scope"
// 	console.log(functionVar)
// 	function subFunc() {
// 		console.log(`${functionVar} bu subFunc scope`);

// 	}
// 	subFunc()
// }

// myFunction()

// console.log(functionVar) 

// {
// 	let a=5
// 	console.log(a);
// }


// if (true) {
// 	let blockVar = "Bu block scope"
// 	console.log(blockVar)
// }

// console.log(blockVar) 

// let globalVar = "Global"

// function outerFunction() {
// 	let outerVar = "Outer"

// 	function innerFunction() {
// 		let innerVar = "Inner"
// 		console.log(globalVar)
// 		consol.log(innerVar)
// 	}e.log(outerVar)
// 		console

// 	innerFunction()
// }
// outerFunction()

// let name = "Sardorbek"

// function sayHello() {
// 	let greeting = "Salom"
// 	function displayMessage() {
// 		console.log(`${greeting}, ${name}`)
// 	}
// 	displayMessage()
// }
// sayHello()

// myVar;
// console.log(myVar) 

// function badPractice() {
// 	badVar = "Global bo‘ldi"
// }

// badPractice()
// console.log(badVar) //reference error


// let globalVar = "Glob"

// function checkScope() {
// 	let functionVar = "Func"
// 	console.log(globalVar)
// 	console.log(functionVar)
// }

// checkScope()

// console.log(globalVar)
// console.log(functionVar) 

// if (true) {
// 	let blockVar = "Inside"
// 	const anotherVar = "Also"
// 	console.log(blockVar)
// 	console.log(anotherVar)
// }

// console.log(anotherVar) 
// console.log(blockVar)


let globalVar = "I am a global variable"

// function outer() {
// 	let outerVar = "I am from outer function"

// 	function inner() {
// 		let innerVar = "I am from inner function"
// 		console.log(globalVar)
// 		console.log(outerVar)
// 		console.log(innerVar)
// 	}

// 	inner()
// }

// outer()

// function outerFunction() {
// 	let outerVar = "I am from outer function"

// 	return function innerFunction() {
// 		console.log(outerVar)
// 	}
// }

// let closureFunction = outerFunction()
// let closureFunction2 = closureFunction
// console.log(closureFunction2


// console.log(myVar)
// var myVar = "Hello, World!"
// console.log(myVar) 

// console.log(myLetVar)
// let myLetVar = "Hello!"

// function testTDZ() {
// 	console.log(myVar)
// 	var myVar = "var hoisted"

// 	let myLetVar = "let TDZ"
// 	console.log(myLetVar)
// }

// testTDZ()