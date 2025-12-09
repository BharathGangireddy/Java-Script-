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

var arr_np = [
     {name : "Bharath"} , 
     {name : "Raju"}, 
     {name : "Bharath"} ,
     {name : "Raju"}
    ] // array storing non primitve data Types


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

/// ES5 :: concat
var e1 = [11,12]
var e2 = [13,14]
var e3 = [15,16]

console.log(e1.concat(e1,e2,e3));


// ES6 :: Spread
var e11 = [11,12]
var e22 = [13,14]
var e33 = [15,16]
var name_e = {
    name : "Bharath",
    age : 12
}

var e1 = [...e11 ,...e22,...e33 , name_e]
console.log(e1)


console.log(e1.length = 0) // Remove all Objects from arrays
console.log(e1)

/// Practice
/* var arr_np_pp = [
     {name : "Bharath"} , 
     {name : "Raju"}, 
     {name : "Bharath"} ,
     {name : "Raju"}
    ] 
    // This is a non primitive data Type
    
/* var k  = arr_np_pp.findLastIndex((item) => {
    return item.name = "Bharath";
})

var x = k
console.log(x)

 */ 

/* 
    indexing  :: 
    1.Primitive --> Iterable -- in its prototype  --> symbol.iterator() --> for of loop
    2.Non Primitive --> non Iterable --> for each loop
*/

var array__a = [1,2,3,4,5] // Stores in memory -->  gets properties by its Prototype (Array)

for(each of array__a) {
    console.log(array__a[each]) // gives values
    console.log(array__a[each-1]) // values by giving indexing
}

var arr_np_pp = [
     {name : "Bharath"} , 
     {name : "Raju"}, 
     {name : "Bharath"} ,
     {name : "Raju"}
]

// Reference Data Types 
//for each loop

for(each in arr_np_pp) {
    console.log(each)
}

arr_np_pp.forEach((value,index) => {
    console.log(index, value)
} )



/* 
    copy of an Array 
    1. Primitive Copy  // Shares refernce memory IT changes Original if affect on Original

    (same for both Array and Objects)
*/


//Array
/* var original_array_1 = [10,11,13,{name : "Bharath"} , () => {console.log("Test")}] // Method 
var copied_array_1  = original_array_1

console.log(original_array_1)
copied_array_1[0] = 1232432
copied_array_1.name = "Raju"
console.log(copied_array_1)

// Object
let user = { 
  name: "Alice",
  age: 25,
  city: "London"
};

let copied = user;       // reference copy
copied.name = "Bharath"; // modifying the copy

console.log(user.name);   // "Bharath"
console.log(copied.name); // "Bharath"
 */

/* 
    2.DEEP MEMORY SHARE : 
        HERE NO MEMORY SHARE SO IT DOES NOT AFFECT ON ORIGINAL 

*/

/* 2.1  :  JSON.stringify and JSON.parse (ignores methods)
    on ARRAYS
     // No changes in Original --> Shares different Memory
*/

//var lodash = require('lodash')
var original_array_DeepMemory = [10,11,13,{name : "Bharath"} , () => {console.log("Test")}] // Method 
var copied_array_DeepMemory  = JSON.parse(JSON.stringify(original_array_DeepMemory)) // ignores methods

//console.log(lodash.cloneDeep(copied_array_DeepMemory))


copied_array_DeepMemory[0] = 12
copied_array_DeepMemory[3].name = "DJ Tillu"
console.log(original_array_DeepMemory)
console.log(copied_array_DeepMemory)  




/* 2.1  :  JSON.stringify and JSON.parse (ignores methods)
    on OBJECTS
*/
let Object_original_DeepMemory = { 
  name: "Alice",
  age: 25,
  city: "London"
};
let Object_Copied_DeepMemory = JSON.parse(JSON.stringify(Object_original_DeepMemory))
Object_Copied_DeepMemory.name = "Run Raja Run"

console.log(Object_Copied_DeepMemory);
console.log(Object_original_DeepMemory);// No changes in Original --> Shares different Memory



/* 
    3.Shallow Copy 
    ES5 -> Object.assign 
    ES6 -> Spread Operator

    If data is primitive then there is no Change , 
    if its reference it will affect Original any changes in Copied
*/



    var original_array_ShallowMemory = [10,11,13,{name : "Bharath"} , () => {console.log("Test")}] // Method 
    //var copied_array_ShallowMemory  = Object.assign([],original_array_ShallowMemory)// ES5

    var copied_array_ShallowMemory = [...original_array_ShallowMemory]

    console.log(copied_array_ShallowMemory[0] = 112121)
    console.log(copied_array_ShallowMemory.name = "Gangireddy")
    console.log(original_array_ShallowMemory)
    console.log(copied_array_ShallowMemory)


/* 
    Testing of an Array :: 
*/
var s = [1,2,3,4,5]
// SOME  --> If some of the value satisfies condition then it returns true , if none return false

var result = s.some((item) => { 
   return  item > 6  
})
console.log(result)

//EVERY  --> if each and every value satisfies the condition then it returns true

var z = s.every((item) => {
    return item > 0
})

console.log(z)

//Join  --> converts array to String

var j = [1,1,3,3,4 , "Bharath"]
console.log(j , typeof(j))
var k1 = j.join() // -->  returns with comma  between them
var myArray = k1.split(' ')
console.log(myArray)
console.log(k1, typeof k1)

var k1 = j.join('') // gives each and every without any space
console.log(k1) 
var k2 = j.join(" ") // gives each and every with space
console.log(k2)



/* How to filter arrays based on some conditions
        filter() --> 
        ->It iterators over each and every items 
        ->It results filtered items by checking the condition given
*/
var f = [1,2,3,4,5,6,7]
var ff = f.filter((item) => {
    return item > 4   
})
console.log(ff)

var fo =[
    {name : "a" , age : 18 },
    {name : "b" , age : 19 },
    {name : "c" , age : 20 }
]
var v = fo.filter((item) => {
    return item.age > 18
})
console.log(v)

/* 
    map() method  
    --> It iterators over each item
    --> By using map it will create a new array with mapped items
 */
var m = [1,2,3,4,5,6,7]

var mm = m.map((item) =>  item * 100)
console.log(mm)  // gives array with values with 100 multiplied values

var mo =[
    {name : "a" , age : 18 },
    {name : "b" , age : 19 },
    {name : "c" , age : 20 }
]

var t = mo.map((item)=> {
    return item.age > 18 

});
console.log(t)

/* Reduce Method  :: multiple value -> single item 
    It takes two arguments
*/

var g = [1,2,3,4,5]

var r = g.reduce((cum,item) => {
    console.log(cum , item)
    return cum+item
},0)


/* How to remove duplicates of An Array 
    1.set with spread Operator
    2.indexOf()
*/ 
var i = [1,2,3,4,4,5,5]
console.log(i)
var j = [...new Set(i)]
console.log(j)

console.log("123424")   

    var uniqueArray = [ ]

    var removeduplicates = (array) => {
        for(var eachValue of array) {
            if(uniqueArray.indexOf(eachValue) === -1) {
                uniqueArray.push(eachValue)
            }
        }
    }
    removeduplicates(i)
    console.log(uniqueArray)


/* How to flatten Array : 
    how to convert multidimensional array into single

    1.flat() method --> ES11  (n-1)
    2.Array.isArray() --> check wheather its array or not
    */

var sd = [1,3]
var twod = [1,2,[3,4], [5,6]] // 2 dimensional Array
var threed = [1,2,[3,4, [7,8]], [5,6]] // 3 dimensional Array
console.log(threed.flat(Infinity))

var flattenArray = [ ]

function flattenFunction(threed) {
    for(var k of threed) {
        console.log(k)
        if(Array.isArray(k)) {
            flattenFunction(k) // recursive function
        }else 
            flattenArray.push(k)
    }

}

flattenFunction(threed)
console.log(flattenArray)



/// map vs for each

/* 
    map:
    1.Loops each value
    2.each value is changed according to condition
    3.Return as array
*/
var kk = [1,2,4,5,5,6]

var arr_map = kk.map((eachValue) => {
    return eachValue ** 2 
}) 
console.log(arr_map)



// forEach

/*
    1.loops each value
    2.modifies each value by given conditions
    3.returns Undefined
 */

var kk11 = []
kk.forEach((item) => {
    var n =item ** 2 // if we return it gives undefined
    kk11.push(n)
})
console.log(kk11)




// Sorting on String

var names_array = ["Scachin" , "Virat" , "Rohit"]
// ASC
var asc = names_array.sort()
console.log(asc) 
console.log(names_array)

//DSC 
console.log(asc.reverse())

//Sorting on Numbers(single) 

var h1 = [3,1,7,9,9,2]
var asc_h1 = h1.sort()
var dsc_h1 = h1.reverse()
console.log(dsc_h1)
console.log(asc_h1)


//Sorting on Numbers(Double or >>) 
var h2 = [3,17,7,99,9,29]
var k33 = h2.sort((a,b)=> {
    // return b-a gives descending order Values
    return a-b // gives Ascending Order values
 })

console.log(k33)


var ob_arr = [{name : "Bharath" }, {name : "Raju"} , {name : "DJ Tillu"}]

var s = ob_arr.sort((a,b) => {
    if(a.name > b.name) return 1
    if(a.name < b.name) return -1
})
console.log(s) 


/// Nested Loop 
var nestedLoop = [3,17,7,99,9,29]

for( i = 0 ; i< nestedLoop.length ; i++) {  //  
    for( j = i+1 ; j< nestedLoop.length ; j++) {
     if (nestedLoop[i] <  nestedLoop[j])  {
        var temp = nestedLoop[i]
        nestedLoop[i] =  nestedLoop[j]
        nestedLoop[j] = temp
     }
    }
}
console.log(nestedLoop)


