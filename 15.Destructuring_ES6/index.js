/* 

let personDetails = {
    name: "Alice",
    age: 30,
    address : {roadNo : 201 , city : "Hyderabad"},
    properties : [{land : '206 acres' , apartments : 202} , {children : [
        "Roy" , 'Salaar'
    ]}]
}
// Without Destructing

console.log(personDetails.name);
console.log(personDetails.age);
console.log(personDetails.address.roadNo)
console.log(personDetails.address.city)
console.log(personDetails.properties[0].land)

//By Destructuring
const {name,age , address : {roadNo , city} , properties : [{land , properties} , {children : [c1,c2]}]} = personDetails
console.log(name)
console.log(age)
console.log(`roadNo : ${roadNo}`)
console.log(c1)
 */


let array_person = 
    [1,2,3,4,5, {name : "Bharath" , age : 32} , {children : ["Tom" , "Jerry"]} ]
// Without Destructuring
    console.log(array_person[0])
    console.log(array_person[1])
    console.log(array_person[5].name)
    console.log(array_person[6].children[0])


    // By Destructuring
let [a,b,c,d,e , {name , age} , {children : [c1 , c2]}]  = array_person
console.log(a)
console.log(b)
console.log(name)
console.log(c1)




var p_details = {
     name_p : "Bharath" ,
     age_p : 24,
     Address : {village : "NRP" , roadNo : "DJ main road"},
     scores : [20,30,40]
}

const {name_p , age_p ,  Address : {village ,roadNo} ,  scores : [a1,a2,a3]} = p_details;

console.log(Address.roadNo);