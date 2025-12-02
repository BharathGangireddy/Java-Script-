//control Statements 

// if Else Statements  --> used when two or more conditions occurs

var a = 10 
var b = 10 
var c = 30 

if ( a === b) {
    console.log(true)

}else if( b<c) {
    console.log(true)

}else console.log(false)


// Switch Operators  :: used only if there is no Step values(<,>,<=, <=) 

var x = 1 

switch(x) {
    case 1 :
        console.log("Monday")
    break 
    case 2 :
        console.log("Tuesday")
    break

    case 3 : 
    console.log("Wednesday")
    break

    default  :
    console.log("not Divisible by any number")
}
