

/*  
       No classess in JS only Objects (Object inheritance/ Prototypal Inheritance) 
       By default Inheritance in JS works internally 
*/
// var x = {} // Prototype is Object we only written Syntax , internally It is created by Object Prototype
// console.log(x.toString()) // toString method in its Prototype(Object)

//     // We can access prototype/ parent of an Object in 3 ways

//     console.log(Object.getPrototypeOf(x))
//     console.log(x.__proto__)
//     console.log(Object.prototype)


//     let a = [] // IT is created internally by Array Prototype (also known as Parent)
//     console.log(a) 

//     let arraybase = Object.getPrototypeOf(a) //  Prototype is Array 
//      console.log(arraybase)
 
//     console.log(Object.getPrototypeOf(arraybase)) // Prototype is Object

/*  class car {
    constructor(brand , color,mileage) {
        this.brand= brand;
        this.color = color;
        this.mileage = mileage;
        this.sound = () => console.log("Roars")
    }   
        getCarDetails() {
            let k = {
                brand : this.brand,
                color : this.color
            }
            console.log(k)
        }      
}

let car1 = new car("TOYOTA" , "Black" , "15 kmpl");
let car2 =  new car("TATA" , "Blue" , "21 kmpl")

console.log(Object.getPrototypeOf(car1))
console.log(Object.getPrototypeOf(car2))
console.log(Object.getPrototypeOf(car1) === Object.getPrototypeOf(car2))

 */
///// Properties :
// console.log("124234346457")
// var objectBase  = Object.prototype
// console.log(objectBase)

// let ObjectProperties = Object.getOwnPropertyDescriptor(objectBase ,   'toString')
// console.log(ObjectProperties)

// let keys = Object.keys(objectBase)
// console.log(keys)
// car1.getCarDetails();

// car1.sound(); 
// 




// How to find Properties for our own method

/* let k = {
    name : "Bharath",
    age : 11
}
let objectBase_k = Object.getPrototypeOf(k)
console.log(objectBase_k)

let check = Object.getOwnPropertyDescriptor(k , 'name')
console.log(check)

let keys = Object.keys(k)
console.log(keys)  

// How to find Own Properties or not

console.log(Object.hasOwnProperty('age')) 
console.log(k.hasOwnProperty('name')) // checks wheather property id its OWN or from Prototype
console.log(k.hasOwnProperty('toString')) // returns false because , it belongs to Object Prototype member

///
*/


function Test(name, age) {
    this.name = name ;
    this.age = age ;
    this.play = () => console.log("Plays Cricket")
    this.go() // We can access Prototype in Own Methods
}

Test.prototype.go = function() { 
    this.play()                  //We can call/access own methods in Prototype methods
     console.log("go")  
} // It is a prototype method 

var t1 = new Test("Bharath" , 24);
console.log(t1.name)

console.log(t1)

t1.go() 

// var keys_t1 = Object.keys(t1) //  ['name', 'age', 'play'] loops only Object members 
// console.log(keys_t1)


// for(var i in t1) {
//     console.log(i)
// }


let obj = {
    name_2 : "a",
    age : 22
}

Object.defineProperty(obj , 'name_2' , {
    configurable : false,
    enumerable : true , 
    writable : false
})

var up = obj.name_2 = "Bharswdsd"
console.log(up)