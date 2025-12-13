console.log(window) // resprents BOM object in browser environment


//////// WINDIW METHODS ///////////////

// alert("Hello World from BOM") // used to show alert box in browser
// prompt("Enter your name: ") // used to take input from user

/* 
let value = prompt("Enter your name : ")
if(value) {
    console.log(value) //  prints value
}else  
    console.log(value) // null if we cancel
 */
/* 
let k = window.confirm()
console.log(k) //  returns true if 'ok' else false */


/* ////// WINDOW PROPERTIES

console.log(window.innerWidth)
console.log(window.innerHeight)


//// WINDOW OBJECTS

console.log(window.localStorage)
console.log(window.sessionStorage)

// These are the children of window
console.log(window.document) // nothing but dom
console.log(window.navigator)
console.log(window.object)
console.log(window.history) 
console.log(window.screen) */

/* let myWin

//window.open(url, windowName, windowFeatures);

openWindowFunction =()=> {
    myWin = window.open("" , "" , "width = 100px  height =100px")  //creates a new Window
}

let open_btn = document.getElementById('open')
open_btn.addEventListener('click' , openWindowFunction)


closeWindowFunction = () => {
    myWin.close()
}
let close_btn = document.getElementById('close')
close_btn.addEventListener('click', closeWindowFunction);

moveWindowFunction = () => {
    myWin.moveTo(100,200) 
}

let move_btn = document.getElementById('move')
move_btn.addEventListener('click', moveWindowFunction)

resizeWindowFunction = () => {
    myWin.resizeTo(500,500) 
}

let resize_btn = document.getElementById('resize')
resize_btn.addEventListener('click', resizeWindowFunction)
 */

/*  Document Object
    Which has many properties 
    and methods to access and manipulate the HTML elements
        exaples: 
        document.getElementById()
        document.createElement()
        document.querySelector()            
    */

// console.log(window.navigator)
// console.log(navigator.appName) // gives info about browser
// console.log(navigator.language) // gives info about language
// console.log(navigator.platform) // gives info about platform


/* // Screen Object
console.log(window.screen.width)
console.log(window.screen.height)

//Location Object 

console.log(location.href)
console.log(location.protocol)
console.log(location.hostname)
console.log(location.port)
console.log(location.pathname)

assignFunction = () => {
    location.assign('https://www.goole.co.in/')
}
let load_btn = document.getElementById('load')
load_btn.addEventListener('click' , assignFunction) */


// History Object :: maintains the url visited by the user
forwardHistory = () => {
    history.forward().history.go(1)

}
let forward_button = document.getElementById('forward')
forward_button.addEventListener('click' , forwardHistory)


backwardHistory = () => {
    history.back() // history.go(-1)

}
let back_button = document.getElementById('back')
back_button.addEventListener('click' , backwardHistory)



//history.go(0) //refresh the current Page

console.log(history.length)