    
/*  Async JS
    1. Call back Functions
    --> call back function creates a callback HEll
    --> difficult for ERROR Handlinig
    --> Low code readability
*/

/* function getSqaureOfaNumber(num, cb) {
    setTimeout(() => {
        let data = num ** 2
        cb(data)
    },1000);
}
getSqaureOfaNumber(2,function displayName(data) { // callback Function
    console.log(data)
    getSqaureOfaNumber(4,function displayName1(data1) {
        console.log(data1)
    });
}); */


/* 
    2.Promises :: 
        A promise is an asynchronous js , which returns a 
        promise object, which complets in future.

        A promise guarantees one of the three outcomes
            1.pending  -->  still waiting for completion 
            2.fullfilled --> success
            3.reject --> failure

        */
    
function cubeOfaNumber(num) {
    return new Promise((response ,reject) => {
         setTimeout(() => {
            let cube = num ** 3
            response(cube);
        },1000)
    })
}

/* cubeOfaNumber(2)
.then((num1) => {
    console.log(num1)
    return cubeOfaNumber(num1)
})
.then((num2) => {
    console.log(num2);
})

 */
/*  To make more simple ES6 introduced  async await
    await --> waits for the return value to get stored,
     then its starts execting 
*/



function add(n1, n2) {
    return new Promise((response, reject) => {
        setTimeout(() => {
            let data =  n1+n2
            response(data)
        },2000)
    })
}
var n = async () => {
    let data  =  await add(10,20);
    let data1 = await add(data,30)

    console.log(data)
    console.log(data1)
}

n();

/*  
    promise.all  --> resolves when all the promises resolves , 
                --> rejects when one of them failed 
*/

let p1 = new Promise((res, reject)=> {
    setTimeout(()=> {
        res("Promise 1");
    },2000)
   
})

let p2 = new Promise((res, reject)=> {
    setTimeout(()=> {
        res("Promise 2");
    },2000)
})
let p3 = new Promise((res, reject)=> {
   setTimeout(()=> {
        reject("Promise 3");
    },2000)
})
/*  
    promise.all  --> resolves when all the promises resolves , 
                --> rejects when one of them failed 
*/

Promise.all([p1,p2,p3]).then((response)=> {
    console.log(response)
}) 

/* 
    promise.allSetelled --> {
        it gives All promises , wheather its failed or rejected 
         status( resolved or rejected) , value  : p1 / p3 / p2
    }
*/

Promise.allSettled([p1,p2,p3]).then((response) => {
    console.log(response)
})

/* 
    Promise.race --> resolved based on First Execution.

*/

Promise.race([p1,p2,p3]).then((response)=> {
    console.log(response)
})