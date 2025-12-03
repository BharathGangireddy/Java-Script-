// Loops --> It is used to print or repeat code multiple times 

//1. Conditional Loops 

// For Loop
for(var i =0 ; i < 5; i++) {
    if(i==2) 
        continue     // It will not print the (i==2) condition it skips the steps 
    console.log((i+1), "Bharath")   
} 

// while loop 
var j = 0
while(j < 10) {
    if(j ==1 ) 
        break
    console.log(j)
    j++
}


/// do while loop : Runs atleast once even if the condition is failed
var k = 15
do {
    if (k = 15) 
        break // --> It breaks the step when the k value meets the condition
    console.log("Ayyappa")
    k++;
} while (k < 1)

/// INfinite Loops :: 

/*for( i = 1 ; i> 1 ; i++) {
    console.log(i)
}
    */

// <script src = './ConditionalLoops.js' ></script>