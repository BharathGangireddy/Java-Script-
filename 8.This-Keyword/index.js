console.log("window object : universe "); // Parent/ Prototype
console.log("this  : family")

console.log(typeof this) // refers an  Object(Current Object)
console.log(this) // Window Object

function Test(){
    console.log(this)
}
console.log(Test)
Test()



/* 
    Literal Object Syntax
    ----------------------
    Regular function  : direct member  
*/ 

let person = {
    name : "Bharath" ,
    age : 24 ,  
    outer : function k() {  
        console.log(this) // outer direct member to object
    },

    outer_2 : function x() {
        function y() {
            console.log(this) // Indirect member(inner function) // refers to current Object    
        }
         y()
    } ,

    outer_3 : () => {
        console.log(this) //  returns values from lexical scope/ Parent scope
    },
  
    outer_4 : ()  =>  {
          console.log("1234567")
        /* "Outer_4 is direct function  so this refers current object ,even though
             inner k is a arrow function this refers to current object")
        */ var k = () => {
            console.log(this)
        }
        k()
    }   

}
person.outer() // returns --> current object
var jjjj = person.outer; // storing in variable returns window object
jjjj()
console.log("0000000000000000000000000000000000000")
var k = person.outer_2
k()
person.outer_3()
person.outer_4()

/* 
    2.Constructor Syntax 

    with new "keyWord" 
    --> empty object
    --> gives this keyword
    --> implicit return 

        WE CANNOT CREATE CONSTRUCTOR FUNCTIONS USING ARROW FUNCTIONS
*/
console.log("345486485875687658");


function animal(name , age , sound) {
        this.name= name , 
        this.age = age ,
        this.sound = sound
        this.sound =  function(){
           function k() {
            console.log(this) /// Indirect function this returns winodw because this does not hava a own family 
           }
            k() 
            k.call(this)
    } 


    this.sound_2 = () => {
        console.log(this)
            var k = () => {
        console.log(this)
            }   
            k()
    } 

}

var p = new animal("Dog",12, "Barks")
p.sound()
console.log("123")
p.sound_2()


/* function Test() {

}

console.log(new Test())  */



class Test_c {
    constructor(name, age) {
        this.name = name ,
        this.age = age  ,

        this.play_a = () => {
            // console.log(this)
            var z = ()=> {            // returns the current scope ==> Test_c 
                console.log(this)
            }
            z()
            
        }
        this.play = function() {
            //console.log(this)

            /* var k = () => {
                console.log(this)
            }
            k() */
            /* function kk() {
                console.log(this) //  this refers to undefined , 
                // modern objects does not allow family to inner functions/ indeirect functions
            }
            kk()  */
    }
}
}
var k = new Test_c("aa" , 23)
console.log("123")
var k1 = k.play
k1()
////// 
k.play_a() 
let play_a_arrow = k.play_a
play_a_arrow()

/* 
    change of this rference 

    ---> ES 5 : call() bind() apply()
    ---> ES6 : arrow() 
 */


var change_reference = {
    n1 : "Bharat" ,
    a1 : 34 , 
    play : function () {
        // console.log(this)
        var inner = function () {
            console.log(this)
        }
        inner.call(this)
        inner.apply(this)
        inner.bind(this)()
    }

}

/* var h = change_reference.play   
h()                                
change_reference.play() */

console.log("Object Literal")
change_reference.play()



function test_11(a,b,c) {
   console.log(a+b+c)
}
test_11(10,20,30)
test_11.call(change_reference , 10,20,30)
    /*
        apply() -> accepts only two arguments, we have to pass in array 
 */ 
test_11.apply(change_reference, [10,20,30]) 
test_11.bind(change_reference,10,20,30)() // we have call once more to give referece object




//////////////////////////////////////////////




// PRACTICE SET


// IN CLASS object THE INDIRECT MEMBER THIS REFERS TO UNDEFINED 

class person_P {
    constructor(name , age) {
        this.name = name;
        this.age = age;
        this.play = function x (){
            console.log(this); // direct member this refers to current Object // person Object 
        };
        this.outer = function y() {
            console.log(this);   // (1)
            var h = function z(a1,a2) {
                console.log(this); // (2)
                console.log(a1+a2);            };
          //h.call(this, 10,20); // assigns this to current Object.
           // h.apply(this , [10,22]); apply accepts only two arguments.
            h.bind(this , 20,1000)();  // bind should be called one more time to change reference.
        };

    }
    
}

let p1 = new person_P("Bharath" , 25);
let c = p1.outer();
c;
