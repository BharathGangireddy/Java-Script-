

array_p = [1,2,3,4,5]

/* Map -->  returns array items by applying callback function on each item
    --> does not affect the original Array
    --> original Array Length = mapped Array  
    */

var mappedArray = array_p.map((item => item ** 2)) // Squares of each item
console.log(mappedArray)


/*  Filter() -> returns an array of values that passes the  test or condition
    --> does not affect the original Array
    --> original Array Length <= filter Array 
*/

var filteredArray = array_p.filter((item) => item % 2 == 0 )
console.log(filteredArray)


/* 
    Reduce() --> returns a single value from multiple values of Array.
    --> It takes to arguments
*/
console.log(array_p )
var reduceArray = array_p.reduce((cum, item) => {
    console.log(cum , item)
    return cum+item
} , 0)
console.log(reduceArray)

/*  */

var sp = [1,2,3,4,5,5]
/* console.log(sp.splice(2,0,223))
console.log(sp)


sp.push(100)
sp.unshift(10) // adds value at the start
console.log(sp) */

// 
/* sp.splice(1,3,11,12)
console.log(sp)

*/

sp.splice(3, 0 , 11,12,14) // Splice(StartIndex , delete count, items to be added)
console.log(sp)


/* var d_array = [11,32,3,4]
var t = d_array.slice(0,d_array.length ) // copy of an Object
console.log(t) */



/* 
    Removing Duplicates by using 
    1. new Set() 
    2.indexOf()
*/
var d_array = [11,32,3,4, 4,4,4]
var remove_dup_d_array = [...new Set(d_array)]
console.log(remove_dup_d_array)


// By Using IndexOf()
var array_without_Duplicates = [] 
for( var i of d_array) {
    if(array_without_Duplicates.indexOf(i) === -1) {
        array_without_Duplicates.push(i)
    }
}
console.log(array_without_Duplicates)


/* 
    sorting of an Array
    
    1.single digit numbers : sort() , reverse()
    2. >= double digit numbers : sort + comparision Operators
    
    3.Reference Data -->  sort + comparision Operators
*/


// Single Digit numbers 
var k1 = [7,6,4,7,4 ,2, 1]
k1.sort() // asc

k1.reverse() //  des
console.log(k1) 

var dd = [111,3,44,66, 33]
dd.sort((a,b) => a-b) // asc
dd.sort((a,b) => b-a)  //dsc
console.log(dd)


var ref_data = [{name : "c"} , {name : "b"}, {name : "d"},{name : "a"}]
var s = ref_data.sort((a,b) => {
    // if(a.name < b.name) return 1 // asc
    if(a.name > b.name) return -1 // desc
})
console.log(ref_data)



//Nested Loop  :: works on all data type 

//var dd_nl = [111,3,44,66, 33]
    var dd_nl = [{name : "c"} , {name : "b"}, {name : "d"},{name : "a"}]

    for(i=0 ;i<dd_nl.length ; i++) {
        for(j=i+1 ;j<dd_nl.length ; j++) {
            if(dd_nl[i].name < dd_nl[j].name){
                var temp = dd_nl[i]
                dd_nl[i] = dd_nl[j]
                dd_nl[j] = temp
            }
        }
    }
    console.log("!23")

    console.log(dd_nl)


// Flattening Of an Array 

var multidimensionalArray = [1,2,3 , [11,12,[5,6,7, [ 11,24]]]]
console.log(multidimensionalArray.flat(Infinity))


var s_d_array = [];

function convert_to_single_dimensional_array(array_md) {
    for (var k of array_md) {
        console.log(k);

        if (Array.isArray(k)) {
            convert_to_single_dimensional_array(k); // recursive call
        } else {
            s_d_array.push(k); // add to result array
        }
    }return s_d_array
}   
var k = convert_to_single_dimensional_array(multidimensionalArray);

console.log(k)

function Test() {
    for(each of arguments) { // unpacks elements
        console.log(each)
    }   
    console.log(Array.from(arguments))

}3
Test(1,2,34,4,5)

var at_array = [11,2,4,4,5]
console.log(at_array.at(0)) // gives values at specific index
console.log(at_array.at(-2)) // reverse indexing