 
 function outer_function(a) {
    console.log(a)  
    return function inner_function() {
       console.log(a+10)     // Here a is accessed after the outer function is executed 
       // It is called Closure
    }
    inner_function()
 }

var inner_function = outer_function(10)
inner_function();

/*
IIFE: Immediately Invoked Function Expression

→ A function that executes immediately after it is created.
→ It creates its own local scope, preventing variables from polluting the global scope.
→ Commonly used to protect private data and avoid name collisions.
*/


(function aaaa(){
    var a  = 10
    var b = 20
})

();

//Hositing

function k11(){
    var k = 20;
   let a ;
   const b= 10; 
}

k11()
/* 
var x = 10
var x = 20  // Here variables can be re declared

let la = 10 
let la = 50         // let and  const are block level so re-declaration is not possible
 
const h1 = 10
const h1 = 20 */

var x11 = 10
x11=20

let  y11 = 10
y11 = 30

const jj = 10 


console.log(jj) // Re assignment is not possible for Const

