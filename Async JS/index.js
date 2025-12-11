/* 
    Sync -->  Executes and prints line by line , Which do not delay
    Async -->  Excutes line by line if any Promises or Timeout Functions 
        presents it delays the output (API CAlls)
        
        Priority Order --> Sync >> Promises >> Timeout
*/

// Sync 
/* console.log("1")
console.log("2") 
console.log("3")      // output :: 1,2,3

// Async 

console.log("one")
setTimeout(() => {           
    console.log("Two")
}, 2000)

console.log("Three")            // Output :: one, Three , Two
 */

///////////////////////

/* TO convert sync --> Async  : 
    1.callback() // ES5 --> drawbacks 
        -- cretes a CallBack hell 
        -- Poor readability
        -- hard error handling
        
    To overcome this JS Introduced : 
    2.Promises
    3.async await       // 2, 3 ES6 (best)
*/

///// 1.  CallBack Functions

/* 
var LastName = (cb) => {
    setTimeout(()=> {
        let LastName = "Gangireddy"
       cb(num,LastName) // referes to getLastName("Gangireddy")
    }, 4000)
}
 
LastName(function getLastName(data) {
    console.log(data)
}); */
/* 

function fetchData(num,cb) {
    setTimeout(() =>{
        var n = num * num 
        cb(n)
    },2000)
}
    fetchData(2,function displayName(num) {
    console.log(num)
        fetchData(num,function displayName(num1) {
        console.log(num1)
            fetchData(num1,function displayName(num2) {
            console.log(num2)
            fetchData(num2,function displayName(num3) {
            console.log(num3)     
            })
        })  // Callback Hell
    })
})
 */

/* 2.Promise
    --> It is a Object (Holds some delay)
    --> Initial Status is pending
    --> It holds future value which gives success/ failure
    --> Resolve() , reject()
*/

function p_fetchData(n) {
    return new Promise((callBackFunction , rej) => {
        setTimeout(()=> {
            //let data_1 = "Red"
            let num = n * n
            //res(data_1)
            callBackFunction(num)
        },0)
    })
}
p_fetchData(2)
  .then(function (n) {
    console.log(n);
    return p_fetchData(n);         // <-- return here
  })
  .then(function (n1) {
    console.log(n1);
    return p_fetchData(n1);       // <-- and return here
  })
  .then(function (n2) {
    console.log(n2);              // last step — no need to return unless you chain more
  })
  .catch(function (err) {
    console.error('Error:', err);
  });



  /* 3. async await 
        promises are lengthy so , in ES6 they introduced this
   */

function k(num){
   return new Promise((resolve_a , reject_a) => {
        setTimeout(() => {
           /*  var data  = "Bharath Gangireddy"
             resolve_a(data) */
             var n =  num  * 2
             resolve_a(n)
        },2000)
       
    });
}

async function display_data(){
   /*  var data = await k();
    console.log(data) */
    var n= await k(2)
    console.log(n)
    var n1= await k(3) // waits until n1 gets the data
    console.log(n1)

}
display_data();


/* 
    promise.All  --> gives falied result
    promise.AllSettled --> gives both
    promise.race --> which wins the race
*/

let p1 = new Promise((res, rej)=> {
  setTimeout(()=> {
    res("Promise1")
  },7000)  
})


let p2 = new Promise((res, rej)=> {
  setTimeout(()=> {
    res("Promise2")
  },2000)  
})


let p3 = new Promise((res, rej)=> {
  setTimeout(()=> {
    rej("Promise3")
  },9000)  
})


Promise.race([p1,p2,p3]).then((res) => console.log(res))

Promise.all([p1,p2,p3]).then((res) => console.log(res))

Promise.allSettled([p1,p2,p3]).then((res) => console.log(res))


