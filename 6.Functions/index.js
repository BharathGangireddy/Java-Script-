// Defining a Function 

//1. Function Declaration 

function add() {
    var k = 10
}
add()

console.log("123")

////2 Function Expressions 

// 2.1 Named Function --> Assiging a variable name to the function Declaration 

var k = function add() {
            var k = 10
        }
k()

// 2.2 Ananomous Functions --> It is nothing but a un-named Functions
var a1 = function() {
    var j = 10 
}

a1()

// 2.3 Arrow Functions --> without Function keyword and name (ES 6)

var b1 = () => { }
b1()


///Parameters and Argumemts

function addTwoNumbers(a, b,c) { //--> Parameters are in Function  definition
    var sum_x = (a+b+c)
    console.log(sum_x)   
}
addTwoNumbers(10,11,12) // -> arguments defined in function calling

///// default Parameters 

function sum(a=2, b=2) { // default Parameters
    return a+b  // 4
}
sum(10,11)

function sum(a= 10, b  ){  // default parameters
    console.log(a,b)   //--? 10, undefined
}
        sum(  ) 

/////   

/// Arguments

// Postional Arguments 

function multiply(x,y) {
    console.log(x+y)
}
multiply(10, 20) // Positional arguments


var z = function sum(x,y) { //(3,2) 
    console.log(x+y)
}

sum(y=2,x=3) // keyword arguments no order needed 

////////////////////////////////////////////////////////////

function m(...numbers) { /// rest parameters
    var k = 0
    for(num of numbers)
        k+= num
    console.log(k)
    }
m(1,2,3,4,5,6)

 
function name_1(y,x,z) {
    console.log(y+x+z)
}

name_1(y=2,x=4,z=1) // keyword arguments 




/// Rest vs argument

console.log("arguments parameter")
function substract(a,v,b ) {
console.log(arguments)
/* for( var each in arguments) { 
    console.log(each, arguments[each])
        console.log(arguments) 
        console.log(typeof(arguments))}
        */
} 
substract(10,11,12,24,45,65,576,657) 


var array = [10,20,30,40]
 var k = array[Symbol.iterator]()  
 console.log(k)
 
 for (var each of array){  
    console.log(each , array[each]) 
}

for(i = 0 ; i< array.length ; i++) {
    console.log(i , array[i])
} 


//////////////////Rest Operator
console.log(`Rest Parameter`)
/*
Rest Parameter : 
    1. It displays all values of the arguments
    2.  It stores all values in array
    3.It starts with ...dots
*/
const arrow_function = (...x) => {
    console.log(x) 
    for(var k  of x ) {
        console.log(k)
    }

   
}   

arrow_function(10,12,345,56 ,567,678)


///// Rest Parameter should be last in function declaration

console.log("Rest Parameter in Function declaration")

function k1(...rest){
    console.log(rest)
    console.log(typeof(rest)) // object but it stored values in array
    console.log(typeof(arguments))
}

k1(1,2,3,4,5)


////Scope
console.log("Global Scope : Can be accessed in functional and block level")

var g1 = 10 
let g2 = 20
const g3 = 30

function test_2() {
    var f1 = 10
    let f2 = 10 //Storage insie the function --> Can be accessed in Functinal level + blocklevel
    const f3 =20
    console.log(g1)
    console.log(g2)
    console.log(g3) 

    if(true) {

        var b11 = 100000
        let b22 = 200000      // Let and var --> block level scope  { }
        const b33 = 300000

        console.log(g1) // Globe Scope can be accessed any where
        console.log(f1) // Functional scope can be accessed in block level
    }
    console.log(b1) // var can be accessed outside function and inside because It is a functional Scope
   // console.log(b2) // let and const are block level scope so these cannot be accessed
}
test_2()

console.log(g1) // Global Scope

//console.log(f1) // These cannot be accessed becoz these are functional scope elements

//console.log(b11) // Block scope variable


/* Hoisting 
    --> It is a default behaviour in java script  which allows users to access
        all variable declarations and functional declarations before the code Execution  

    --> Accessing memory before code Execution
 */

// Variable declarations

console.log(a)

var a = 10
console.log(a)
var b  = [10,11,132, 23]
var c = {name : "Bharath" , age : 10}

var k = function(){


}
var j = function() {
    console.log("123")
}

console.log(arrow_function_1)
var arrow_function_1 = () => {
    console.log("arrow function")
}

arrow_function_1()
//Functional Declarations


zzz()
function zzz() {
    console.log("k")
}
console.log(zzz)


var m1 = 1
let m2 = 2 
const m3 = 4

/////

console.log("var let const ")

var v1 = 10
var v1 = 20
//let v1 = 20 // gives v1 has already declared


let lx ;
lx= 10 
console.log(10)

const c_k = 10  
 
/* 
closure :
--> It allows inner function to access outer function variables 
    even after the outer function execution 
*/
function a_outer() {
    var a_name = "Outer function"
    function a_inner() {
        console.log(a_name) // inner function is accessing the outer function variables
    }
    return a_inner
    }

var inner = a_outer()
inner()

console.log("closure function")
function c_add() {
    var x = 10 
    var y = 20 
    function add() {
      console.log(x)
      console.log(y)
    }
    return add
}
var x = c_add()
x()

///
console.log("Interview Question")


var t1 = 1

function t2() { 
    console.log(t1) // gives undefined because its in local scope
    // Even t1 in global variable but it prefers t1 if its not in local memory 
    var t1 = 10   
    console.log(t1) // 10
}

t2()
console.log(t1) // global variable ,, 1


function aaaa(){
    // console.log(b) // without varible it will give b is not defined
    b = 10 // assigns value to global variable (but not recommened) 
    console.log(b)
 
}

console.log(aaaa())
//console.log(b)
k=10
console.log(k)  

/* 
    IIFE :: Immediatly Invokable Function Expression 
    -> ES5 based 
    -> Its a way used to execute a function immediatly as soon as they created
    -> Used to maintain variables and methods privately
    -> The variables declared inside the function (locally) cannot be accessed 
        outside it , which prevents global scope pollute
    -> used to create functions and variables privately 

*/

// Immediate function call takes place in local Scope

    console.log("123"  );
    (function add() {
        var a = 10 
        console.log(a)
    })()


 
/* 
    Function Currying  :: It is a technique that converts a function with multiple 
    parameters into multiple functions with single parameters.
    --> We can avoid passing again and again 
    --> Closure is the internal technique operated

*/

function fun_1(a) {
    return function fun_2(b) {
        return function fun_3 (c) {
            console.log(a+b+c)
        }
    }
}

fun_1(1)(2)(3)


// It Avoids passing the same values again
// A Product price will be same and the discount varies 

function bikePrice(price) {
    return function discountAmount(discount) {
        console.log(price * discount )
    }

}

var discountAmount = (bikePrice(100))
discountAmount(0.1)
discountAmount(0.4)



    /*First-Class Functions in JavaScript

    When functions are treated like values, they give us three powerful abilities:

    1. A function can be stored in a variable.
    2. A function can be passed as an argument to another function.
    3. A function can be returned from another function. 

        Using even one of the abilities uses first-class functions.

    */

var x = function(cb) { // 1.Function is stored in Variable // 
     var o_fun = cb
     o_fun()
    
    return function function_inner() {
        console.log(" returning inner function so called First class Functions")
    }
}


var first_class_function = x(function add_fc() {
    console.log("sending function as an argument") //--> Sending function as an arguments
})

first_class_function()


/* HIGHER-ORDER FUNCTIONS

   A function is called a Higher-Order Function (HOF) when:

   1. It receives another function as an argument, OR
   2. It returns a new function, OR
   3. It does both.

   In JavaScript, any function that satisfies at least
   one of these conditions is considered a Higher-Order Function.
*/


function h_o_f (h_cb) {
    var k = h_cb 
    k() 
    return  function h_o_f_2() { // returns function
        console.log("123")  
    } 
}

h_o_f(function h_cb(){}) // function passed as an argument


/* A pure function is a function that always returns the same output for 
the same input and has no side effects.
->It does not modify external state, 
  does not depend on external variables that change, 
  and does not interact with the outside world (like console, DOM, or API calls).

👉 Formula:
Same Input → Same Output + No Side Effects

👉 Why it matters:
Pure functions are predictable, easy to test, 
and commonly used in functional programming and Redux reducers. 

*/
function add(a,b) {
    console.log(a+b) // same output, when we give same input
}

add(10,20)  // It does not interact with console , DOM

function calculateDiscountPrice(p,d) {
   return p - (p * d ) 
}
console.log(calculateDiscountPrice(1000,.25)) 

/* IMPURE FUNCTION — Interview Definition
-> An impure function is a function that either produces side effects 
   or does not give the same output for the same input.
-> It interacts with or modifies something outside its own scope—
`such as external variables, DOM, console, API calls, or randomness. */

let cartPrice = 11

function impure_f(price) {
    var updated_price = cartPrice += price
    return updated_price    

    // math.random() --> impure because it gives unpredictable values
}
console.log(cartPrice) // Initially cart price is 11
console.log(impure_f(1000)) // after it is 1011 , it is impure because it effects externally
 

/* Recursive Function  
   when the function calls itself again and again until the given condition become false   
*/

function fact(i) {
    if (i <= 0) {
        return 1
    }else 
        return i * fact(i-1) // function calling itself
        
}

console.log(fact(5))
