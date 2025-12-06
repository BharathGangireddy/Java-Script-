console.log("Boring...")  


/* // 1/ Primitive copy :: (Primitives -> if copied modified , it will not effect on Original 

var a = 20
var b = a
console.log(b)
b= 40 
console.log(a)
console.log(b)
 */

// Normal copy of objects  

/* var original_Obj = {
    name : "Bharath" , 
    age : 24 ,
    address : {road : 201}, // reference DS
    play : () => console.log("123") // can be updated using setter
  }

var copied_Obj = original_Obj;

copied_Obj.name = "Reddy"
copied_Obj.address.road = 205555  // effects the original reference copy
console.log(copied_Obj)
console.log(original_Obj) */

/*  2. Deep copy

2.1. JSON.parse -> converts JSON string into js object

   JSON.Stringify -> converts JS object to  JSON object

   METHODS WILL NOT CONSIDERED HERE
 */
console.log("Deep copy")

var dc_original_Obj = {
    name : "Bharath" , 
    age : 24 ,
    address : {road : 201},
    play : () => console.log("123") 
  }
console.log(dc_original_Obj)
var dc_copied_Obj =  JSON.parse(JSON.stringify(dc_original_Obj))
dc_copied_Obj.name = "Bharath Gangireddy" // It is not effectig the original Array //Primitives
// dc_copied_Obj.address.road(12334365465) // Error because no method access here
console.log(dc_copied_Obj) 


/* TO OVERCOME ABOVE 
  THEY INTRODUCED 

    "lodash " 
    --> we have to install npm install lodash
    -->  We have to import lodash module
    --> with the help of  
      require('lodash')

     ***** no change in original *****
*/
console.log("Lodash ")
/* var lodash_1 = require('lodash') // importing
console.log(dc_copied_Obj)
var dc_copied_Obj_lodash = lodash_1.cloneDeep(dc_original_Obj)
dc_copied_Obj_lodash.name = "Bharath Gangireddy 1234"
dc_copied_Obj_lodash.address.road = 34345346537
console.log(dc_copied_Obj_lodash)
 */

console.log(" ")
console.log("Shallow copy")

/*  SHALLOW COPY :: shares memory partially 
    It has 2 parts : 
    -----ONLY PARTIAL MEMORY ACCESS------------
        **** For reference data type(Arrays,Functions, Objects) if we update the value changes in original
        1. Object.assign() -->
        2. Spread Operator --> 
*/

console.log("Spread Operator")

var sp_original_Obj = {
    name : "Bharath" , 
    age : 24 ,
    address : {road : 201},
    play : () => console.log("123") 
  }
console.log(sp_original_Obj)

var sp_copy_obj = Object.assign({},sp_original_Obj)

sp_copy_obj.name = "Run raja Run"
sp_copy_obj.address.road = 123473657657465848754
console.log(sp_original_Obj)
console.log(sp_copy_obj)