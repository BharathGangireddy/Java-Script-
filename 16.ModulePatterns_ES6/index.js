//import x from './sample.js'
import {x} from './sample.js'
   /* Module Patterns are advanced version of IIFE's

    --> It is used to create modules in JavaScript.
    --> It helps in organizing code into smaller, manageable, and reusable pieces.
    --> It provides encapsulation, allowing us to hide private variables and functions from the global scope.
    --> It promotes code reusability and maintainability by separating concerns into different modules.
    */
    var a = 10;
    var b = 20;
    var c = () => {
        console.log("Hello from module pattern"); }
    console.log(a + b + x);