//import {loadash} from 'loadash' 
//var lodash = require('lodash')
/* 
    Object :: 
    ->It is a reference data structure which allows users to store multiple values 
    at single location
    
    ->Data stored in key value pairs
    ->values :: value can be any data type
    ->keys :: are unique identifiers
    
    built in objects :: arrays , math. , Date 

    --> Objects are used to model real world entities ex : car(model , kmph , color)
    --> Can be accessed by .(hard values) and [] (API's)
    */


 // 1.Object  literal syntax
const car = {
    name : "Toyota" , // Properties
    mileage : "18 kmpl" ,
    color :'Black', 
    address : {road : 101}
} 

console.log(car)
let a = "name"
console.log(car[a]) // acccessing name by storing key name in variable
console.log(car.name) // key is valid idetifier
console.log(car["name"])

console.log(car.address.road)



var dog_details_1=  {
    name: "Chintu",
    age : 10 , 
    sound : function (){  // method
        console.log("Bark")
    }
}
console.log(dog_details_1)
var sound_a  = dog_details_1.sound()
//sound_a()


var dog_details_2=  {
    name: "Chintu_2",
    age : 10 , 
    sound : function (){  // method
        console.log("Bark")
    }
}
console.log(dog_details_2)
var sound_a  = dog_details_2.sound() 

/* The above two objects have same methods
    with different property values 

    --> To over come this we use Constructors(ES5) , classical way(E56)
 */


function Test(){
    console.log(this)
}



/*  2.Constructor Function  (Produces Objects) (ES 5)
    -> with the help of new Key Word
    -> new keyword gives :: creates empty object , this keyword(explicit return)
        and returns automatically
*/

function PersonDetails(name , age){
    this.age = age,
    this.name = name, 
    
    this.play = function(sport) {
        console.log(`${name} plays ${sport} `)
    }
}

var p1 = new PersonDetails("Bharath Gangireddy", 20)
console.log(p1.name)
p1.play("Cricket")
console.log(typeof PersonDetails)
var p2 = new PersonDetails("Sai Ram" , 20)
console.log(p2.name)
p2.play("BGMI")




/* 3. With the help of Class keyWord  
    ES6 Classical way 

    -- Prototypal Inheritance / Object Inheritance

    Class : It is a blue print for creating objects
    --> It defines structure(properties) and behavior(methods) while creating objects.
    --> Introduced in ES6 to make object-oriented programming easier and cleaner.
*/


    /* 
      Constructors :: It is special method used inside a class,
      which is automatically called when its created by using new keyword.
     It is used to initialise object properties and receive parameters
    */
class vehicle {
    constructor(brand , model , speed ,road){ 
        // Structure(Properties)
        this.brand = brand,
        this.model = model,
        this.speed = speed,
        this.road  = road
     }
        
// Methods / Behaviour
        landType() {
        console.log(this.road)
    }
}
var v1 = new vehicle("Toyota" , "Innovaa" , "45kmpl" , "Offroad")
console.log(v1.brand)

v1.landType() // Calling a method

console.log(v1)
console.log(typeof vehicle)


/// Object Manipulations 

console.log("------Object Manipulation----------")

var new_Object = {
    name_1 : "Bharath" ,
    age : 20 ,
    play :() =>{
        console.log("I played Cricket")
    },
    height : 12

}

console.log(new_Object.name_1);
console.log(new_Object["name_1"]) // with the " " we can access object.values

let obj_1 = "age" // Key stored inside a variable
console.log(new_Object[obj_1])
console.log(new_Object.obj_1) // gives undefined because there is no key with that name


/// Adding Properties to the Object

new_Object.place = "Hyderabad"
console.log(new_Object)
new_Object["place"] = "Nellore" 
console.log(new_Object)  // added new property to the existing Object


new_Object.place = "Kakinada" // Updated place
new_Object["age"] = 40
console.log(new_Object)

delete new_Object["age"]  // deletes the property from the Object

console.log(new_Object) 

console.log("Object Iterations");

var k = Object.keys(new_Object)
console.log(k)

var oE = Object.entries(new_Object)
console.log(oE)

for(var key in new_Object) {

   /*  if(typeof(new_Object[key]) === 'function') {
        new_Object[key]()
    }else                                       // Returns Values
    console.log(new_Object[key]) */

    console.log(key, new_Object[key])
}
/* 
    outside function we have to add "" to key 
*/

console.log(new_Object["name_1"])



console.log("How to create a copy / Clone")


// Primitive data Types 

let k1 = 10
let y = k1 
console.log(k1)
console.log(y)
y=  20
console.log(y)

let a11  = [1,23,4,4,5,]
let a22 = a11

console.log(a22)
//

// Non Primitive Data Types 

var npd = {
    name : "Reddy",
    value : 1000,
    array_a : {road : 101},
    play : function(){
        console.log("Playing")

    play_a : () => {
        console.log("Arrow function")
    }
    }
} 
/* Normal copy by assignment operator */
console.log(npd)
var copy_npd = npd

console.log(copy_npd)

/* 
    DEEP COPY :: No methods
    ===========
    1.JSON.stringify  --> converts js objects into JSON String
    ingores Functions and methods

    accepts : String , number , null , objects

    2.JSON.parse --> converts JSON string to JS Object

*/
    // if any changes, it will not effect the original Object 
var a_jsonStringify = JSON.parse(JSON.stringify(npd))   
console.log(new_Object)
a_jsonStringify.name = "JSONStringify"
console.log(a_jsonStringify)


/*  DEEP COPY :: with methods
    =========== 
    lodash
*/

/* var lodash = require('lodash')

var lodashCopy  = lodash.cloneDeep(npd)
console.log(lodashCopy) */


/* 
    3.Shallow Copy : partial copy(deepcopy(Primitives) + Normal copy (References))

    1.Object assign (E5 6) :
    2.Spread Operator -> ES 6 (): 

*/
console.log("Shallow copy : object assign")

var copiedObject = Object.assign({} , npd)


copiedObject.array_a.road = 102
console.log(copiedObject)
console.log(npd)

