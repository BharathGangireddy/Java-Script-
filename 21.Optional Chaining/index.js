
// ES5 Short ciruit Operator

// console.log(person && person.address1 && person.address1.street) // we handled Error

/* 
    Optional Chaining :: It is a feature in JS of ES11 and it is denoted by ''?.''
    --> When we try to acesss undefined properties of nested loop , it does not throw error
    this helps to prevent errors 


    --> WE use this on API to handle errors
*/

let person = {
    first: "John", 
    last: "Doe",
    age : 18,
    address : {
        street: "123 Main St",
        city: "Anytown"
    }
};
console.log(name_a.address?.street)
console.log(name_a.address1?.street) // return undefined , but not Error
console.log(name_a) 

