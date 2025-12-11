/* 
    API Calls :: Application Programming Interface
        It is a set of rules that lets commuicates between two software 
        systems 
    EX : if you want weather data it calls weather API 
        -> returns weather info        

        fetch() is a built-in JavaScript function that sends an API request to a server and gets data back.

        GET --> receives data
        POST --> sends data /  creates data
        PUT  --> updates data fully
        PATCH --> updates data partially 
        DELETE --> removes data from source
        */

var getAllBtn = document.getElementById("getAll");
var getSingleBtn = document.getElementById("getSingle");
var sendDataBtn = document.getElementById("sendData");
var updateDataBtn = document.getElementById("updateData");
var deleteDataBtn = document.getElementById("deleteData");      

// fetch  return promise(holds a future value) (with delay)

/* var getAllFunction = () => { 
        // console.log(window) --> Glbal object
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((respone) => {
            //console.log(respone)
            return respone.json()
        })
        .then((data) => {
            console.log(data)
            var api_data_ele = document.getElementById('postList');
            data.forEach(each_item => {
                var list_ele = document.createElement('li')
                list_ele.textContent = `userId: ${each_item.userId}, title: ${each_item.title} ,  body: ${each_item.body}}`
                api_data_ele.appendChild(list_ele)
            })
        })

    }
var data = getAllBtn.addEventListener('click',  getAllFunction) */


var getSingleElement = () => {

    // Sends an HTTP GET request to the server (API endpoint)
    fetch('https://jsonplaceholder.typicode.com/posts/10') // Hard Coded

        // .then() receives the server's response (still a Promise-like Response object)
        .then((response) => {   
            // response.json() reads the response body and returns a Promise 
            // that resolves to actual JSON data (readable JS object)
            return response.json();
        })

        // This .then() gets executed after JSON data is fully converted
        .then((data) => {  
            console.log(data)
            
            // Logs the actual usable data
        });

};

// Runs the function when the button is double-clicked
getSingleBtn.addEventListener('click', getSingleElement);



let newData = {
    userId: 0 , 
    title : "updated" ,
    body : "body"
}
var sendData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        headers  : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(newData)
    })
    // fetch is a js function , which sends get request to the server(API end Point)
    .then((response) => { // response is an object which gets response from server  
            // .this --> awaits to get response from server (Promise like Object)
        return response.json() // reads response body and returns a Promise object
    })
    .then((data) => { // .this() --> waits until  JSON data fully converted 
        console.log(data)
    })
    .catch((err) => console.log(err.message) )

} 
sendDataBtn.addEventListener('click' , sendData)


var x_updateDate = {
    userId : 10,
    title : "updated title",
    body : "updated body"
}
var updateData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/10' ,{
        method : 'PUT',// used to UPDATE DATA
        headers : {
            'Content-type' : 'application/json'
        }, 
        body : JSON.stringify(x_updateDate)
    }) 
    .then((response) => {
        return response.json()
    }).then((updatedData) => {
        console.log(updatedData)
    }).catch((err) => {
        console.log(err.message)
    })

}

updateDataBtn.addEventListener('click' , updateData)

deleteItem=(id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}` , 
        {
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            }
           // body : JSON.stringify(deleteItem)
        }
    ).then((response) => {
        return response.json()
    }).then((deletedData) => {
        console.log(deletedData)
    } )

}

deleteDataBtn.addEventListener('click' ,()=> deleteItem(101))























/* fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    console.log(response);
   /*  let data =response.json();
    console.log(data.Array[0]) 
}) 
*/




