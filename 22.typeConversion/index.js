/* 
    Type Conversion in JavaScript
    1. Implicit Conversion --> internal conversion by JS engine 
        a.Numeric String with '+' gives String
        b.Numeric String with " - , / , % , * " gives a Number
        c.Non numeric String with '+ , - , / , % , * ' gives NaN
        d.boolean with '+' gives String
        e.boolean with " - , / , % , * " gives a Number
        g.numbers with null --> gives number (null 0)


    2. Explicit Conversion  --> manual conversion by developer

*/
// concatenation  (number + string = string)
let a  = "10" + "20" 
let a1 = 10 + "34"
console.log(a)
console.log(true + "20")
console.log(false + "20")
console.log({} + "20")
console.log("a" + [] + 20) // a20
console.log(function () {} + 20)

console.log(typeof a) 
/////////////////////////////////////////

let b = "10" - "20" // subtraction (string - string = number)
console.log(b , typeof b)
console.log(typeof b)
let c = "10ss" - "3" //  gives NAN
console.log(true - "te")  
console.log(false - "1") 
console.log("12324rw453454")
console.log({} - "2")



console.log(1+true)  // returns number (true = 1 , false = 0)
console.log("1" + true) // return string
console.log("1" - true) // return number

console.log(null + 11) // returns number -- 11
console.log(null - "0") //  returns number -- 0  

console.log(undefined + 1) // returns NAN 
console.log(typeof(undefined + "1abd")) // returns undefined1abd

console.log("boolean")

console.log(true + true) 

console.log(true + false)

console.log(false + false)

console.log(true  - true)
console.log(false - true)
console.log(true - 1) // 0 

console.log(null + true) // 1 becoz null = 0
console.log(undefined + true) // NAN
console.log(true - [111])
console.log(undefined +undefined) // NAN


/*  
    Explicit Conversion :: manual conversion by developer


    */

var x = 10
console.log(x , typeof(x))

var n1 = String(x)
console.log(n1,  typeof(n1))

var n2 = Boolean(n1) 
console.log(n2, typeof n2) 

var n3 = Number(n2) 
console.log(n3 , typeof(n3))