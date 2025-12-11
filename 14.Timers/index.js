/* We can access window objects directly  or with window.*/


/* 
    setTimeout - executes a function , after waiting a specified number of milliseconds.
    setInterval - same as setTimeout but repeats the execution of function continuously after every specified milliseconds.
    clearTimeout - stops the execution of function scheduled by setTimeout.
    clearInterval - stops the execution of function scheduled by setInterval.
*/

var btn_clearTimeOut = document.getElementById('btn-clearTimeOut');
var btn_clearInterval = document.getElementById('btn-clearInterval')

var t1 = setTimeout(() => {
        console.log("Hello Timeout Timers")
    },10000)

var t2 = setInterval(()=> {
    console.log("SetInterval")
    },2000)

var clearTimeOutFunction = () => clearTimeout(t1) 
var clearIntervalFunction = () => clearInterval(t2) // clears the intervals

btn_clearTimeOut.addEventListener('click' ,   clearTimeOutFunction)

btn_clearInterval.addEventListener('click' ,   clearIntervalFunction)
