console.log(Math)

console.log(Math.min(10,5,6.6,6.4))
console.log(Math.max(10,5,6.6,6.4))
console.log(Math.ceil(100.1))
console.log(Math.floor(100.6))
console.log(Math.round(100.3545))
console.log(Math.round(100.56765))
console.log(Math.pow(2 ,3))
console.log(Math.sqrt(2))

// Date Object
 
var date =  new Date();
console.log(date.getDate())
console.log(date.getMonth()) // 0-11 months 

date.setFullYear(2040)
console.log(date)

var newDate = new Date(2025, 11 , 31)
console.log(newDate)


/* Template String :
    --> ES6 
    -->  We can embedded variables and expressions with string easily
*/
var n = "Bharath"
var e = "evening"
console.log(`${n} plays cricket ${e} `)


/* String Object 
    1. String Literal --> when created internally adds Wrapper Object
    2. Internally new String is Created
*/

var string_a = "  Hii Good Morning  "  // internally new String(Wrapper Object)
console.log(string_a.endsWith('ng'))

console.log(string_a.length)

/* How to trim 
    1.trim start 
    2.trim End
    3. trim --> removes start and End
*/
console.log(string_a)
console.log(string_a.trim())


/* 
    Extract or Copy of a String

    1.Slice -->  copies String
        slice(0) -> only 1st letter 
        slice(0,5) -> gives String from 1st position to 4th position
        slice(-3) ->  Reversing
*/

const trimString = "Bharath"
console.log(trimString.slice(-5))


/// SubString

console.log(trimString.substring())
console.log(trimString.substring(0,5))  // displays from 0 th 4th index
console.log(trimString.substring(2)) // prints from 2nd index postion


/* 
    Extracting a character
*/
// 1. charAt()-> gives character at specific position
// 2. charCodeAt()-> gives ASCII value

var c = "BharatH"

console.log(c.charAt(6)) // H
console.log(c.charCodeAt(6))  // 72
/* 
    Case conversions 
    1.toUpperCase()
    2.toLowerCase() 
*/
console.log(c.toLowerCase())
console.log(c.toUpperCase())
 
/* Replace Method  :
    1.Replaces first Occurence
    2.Case sensitive
*/

var r = "Message"
console.log(r.replace("Me" , "k2"))
console.log(r.replace("M" , 'T')) /
console.log(r.replace("e" , "t")) // replaces the first Occurance
console.log(r.replaceAll("e" , "gg")) // replaces the all values that matches

/* 
    CONCAT : adds string at end
*/

var a  = "Bharath "
var b = "gangireddy" 
console.log(a.concat(b))


/* 
    Padding(ES12) : adds values start or end
    
    1.padStart("target length" , "add value") // adds value at the Start
    2.padEnd("target length" , "add value") // adds value at the End
*/

var ps = "Bharath"
console.log(ps.padStart(12 , "gangi"))  // ps length : 7 given 12 (5 remaining) --> gangiBharath
console.log(ps.padEnd(15, "gangi")) // ps length : 7 given 15 (8 remaining) -->Bharathgangigan 



/* 
 SPLIT : 
    converts String into single Array

    JOIN
    To convert array into String 
*/

var name_s = "Hello Split"

var s1 = name_s.split()     // gives string into single array
var j1 = s1.join()          // returns array into String
console.log(s1)
console.log(j1)

var s2 = name_s.split('') // gives each characters into array including space
var j2 = s2.join('')     // returns array of characters to String 
console.log(s2)
console.log(j2)

var s3 = name_s.split(' ') // // Splits each word seperately into array
var j3 = s3.join(' ') // returns array of each words into String

console.log(s3)
console.log(j3)

/* 
index
*/

console.log(name_s.indexOf('H'))
console.log(name_s.indexOf("Hello")) //gives 0 becoz H index is 0
console.log(name_s.indexOf("S")) 
console.log(name_s.lastIndexOf('l')) // gives last index of the Character


/* 
    includes -> Checks the given String is preset or not
*/

var t = "Bharath Simha"
console.log(t.includes("Sim"))


console.log(t.startsWith('t'))
console.log(t.endsWith("a"))


var string_r = "Bharath "
console.log(string_r.repeat(10)) 







var newObj = {
    name : "Bharath",
    age : 12
}

newObj.place = "Goa" // adding
newObj.place = "Vizag" // updates
delete newObj.place
console.log(newObj)

var k22 = new Date(2025, 0 , 31) // 0-11
var k33  = new Date("2025-12-31") // 1 -12
 var d2 = new Date("2025-01-31");
console.log(d2);

console.log(k22)

console.log(k33)
