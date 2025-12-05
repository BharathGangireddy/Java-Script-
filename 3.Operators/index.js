// Operators --> We use operators to perform mathematical,  logical, functional operations

// 1. Airthmetic operators --> + , -, * ,/ , % , **(Exponential)
var a1 = 10 
console.log( a1+= 100)        // Compound Assignment Operators

console.log(a1 -= 10)
console.log(a1 **= 10)

// Incremental Operators 

var x = 10

console.log(++x) // pre - increment x-> 11
console.log(x++) // post -increment x-> 11 
console.log(x)   // x-> 12 

// Decremental Operators 

var d = 10

console.log(--d) // --> 9
console.log(d--) // --> 9
console.log(d) // 8


//2.  Assignment Operators ( = ) / -> Which is used to assign values
var m = 10


//3. Comparison Operators 

// 3.1  Relational Operators --> >, < , <= , >= 
    var r1 = 10 
    var r2 = 20 
    console.log(r1 < r2)



// 3.2 Eqality Operators   and  InEquality Operators

var k = 10
var b1 = '10'

// Loose Equality --> Which verifies only values
console.log(k == b1)  
console.log("=--")
console.log(k != b1)
// Strict Equality --> Which verifies only values and Data Types
console.log(k === b1)
console.log(k !== b1)


////
var n1 = null           
console.log(typeof n1) // gives object data type
var n2 = undefined
console.log(typeof n2)  // gives undefined Data Type

console.log(n1 == n2) // -> Gives true because both values are nothing

console.log(n1 === n2) // -> Gives false because, data types does not match

//// Euality in Objects 

// Ex 1
var name_1 = {name : "Bharath"}
var name_2 = {name : "Bharath"}
console.log(name_1 == name_2) // gives false becoz each address different memory 
console.log(name_1 == name_2) // false 

// ex 2 

var name_11 = {name : "Reddy"}
var name_22 = name_11 

console.log(name_11 == name_22) // gives true name_22 address name_11 
console.log(name_11 === name_22) // gives true because values equal and datatypes are also equal


///////////////////////////////

// 3.3 Ternary Operators ( if else )  --> To render content conditionally

const number  = 10
const result = number < 11 ? true : false
console.log(result)

// 3.4 Logical Operators --> 

// && , || , ! 