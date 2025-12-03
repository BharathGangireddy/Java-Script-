var Person= {
    name : 'Bharath',
    age : 40 , 
    city : 'Hyderabad',
    play () {
        console.log("Play")
    }
} 

/* To iterate non iterable Data Structures we have to Use 
    --For in Loop
*/
for(var k in Person) {
    console.log(k , Person.name) // .-->  Static access
    console.log(k , Person[k])   //  [] --> Dynamic Key (which gives values)

}

console.log(Person)
Person.play

// Iterable Data Structures (For of loop)


var Person_a = [1,2,3,4,5]
console.log(Person_a)

var IterableDs = Person_a[Symbol.iterator]()
console.log(IterableDs)


console.log(IterableDs.next()) // return status {Value : 1,  Status : false}
console.log(IterableDs.next())


/*
for(var jj of Person_a) {  // loops only values
    console.log(jj)
}
 
*/