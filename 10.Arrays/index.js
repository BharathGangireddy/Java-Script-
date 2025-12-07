/* Arrays 
    -->It is reference data Structures 
    --> JSE adds indexes internally (0- )
    --> Array Stores only values (no keys) same or differnt type 
    --> can store multiple values at single location

    --> values can be same data type or  different data type
    --> Homogenous (same data type)         --> general use case
    --> Hetrogenous(different Data type )

    --->...rest parameter :: It packs values into array
            ES6 version
            rest parameter should be the last parameter 
            It starts with ... dots

*/
/// Array literal Syntax
var array = [12, 13, 14, 15, 16]  
console.log(array) 

// How to add new value into array

console.log(array.unshift(200)) // adds values at start
console.log(array.push(10))     // adds values to end

// Splice adds value at any position
console.log(array.splice(0,0,12332)) // adds at start
console.log(array.splice(3,0,21321324))
console.log(array.splice((array.length-1),0,2323)) // adds at last but one position

console.log(array)


///// How To remove values in an array

var arr_r = [1,2,3,4,5,5,6]
console.log(arr_r)

console.log(arr_r.pop()) // removes last value
 console.log(arr_r.shift()) // removes first value
console.log(arr_r.splice(0,1)) //Works on index method
console.log(arr_r)


///// How To remove all values in an array

var arr_r = [1,2,3,4,5,5,6]
console.log(arr_r)
arr_r.length = 0        // Better approach
arr_r = []
arr_r.splice(0,array.length)
console.log(arr_r)


/* 
var arr_c = [1,2,3,4,5]
arr_c = []       // Removes original and Duplicated array 
var arr_copy = arr_c
arr_c = []       // it will not remove because garbage collection
 console.log(arr_c)
console.log(arr_copy) */

/* 
    Finding value in array
    1.Primitive data Type    
*/
var arr_f = [1,2,3,4,5,5,6]
console.log(arr_f.indexOf(1))
console.log(arr_f.lastIndexOf(15)) // it is not in array , it gives -1
console.log(arr_f.includes(5))

/* 2.Non Primitives / References  // gives undefined
    find() -> Iterator functions
    findIndex()          // -1 if no match
    findLastIndex()      // -1 if no match
    findLast()           // gives undefined
*/

var arr_np = [ {name : "Bharath"} , {name : "Raju"}, {name : "Bharath"} , {name : "Raju"}] // array storing non primitve data Types


var find_referece_values  = 
    arr_np.find((item) => {
        return item.name === "Bharath"
    })
console.log(find_referece_values)

var findIndex_value =  
    arr_np.findIndex((item) => {
        return item.name === "Bharath"
    })
console.log(findIndex_value)


var findLastIndex_value = 
    arr_np.findLastIndex((item) => {
        return item.name === "Raju"
    })

console.log(findLastIndex_value)

var findLast_value = 
    arr_np.findLast((item) => {
        return item.name = "Raju"
    })
console.log(findLast_value)



/* How to merge/combine 
    arrays

    ES5 (concat)

*/

var a1 = [1,2,3,4,5]
var a2 = [11,12,14,14]
var a3 = [111, 222,333]

console.log(a1.concat(a2 , a3))

// ES 6 Spread Operator
var a_name ="Bharath"

var com_arr = [...a1,...a3,...a2,...a_name]
console.log(com_arr)


console.log(typeof null)

function k(...numbers) {
    console.log(numbers += numbers)
}
k(1,2,3,4,5,6,7)