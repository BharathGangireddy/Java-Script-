/* 
//How to examine the document object in the console
console.dir(document) // realDOM
console.log(document) // HTML DOM
//To access different parts of the document object  

console.log(document.URL)
console.log(document.all) // return all html tags in the document

console.log(document.forms) // return all the forms in the document
console.log(document.forms[0]) // return first form in the document
console.log(document.forms[0].id) // return id of first form in the document
console.log(document.forms[0].className) // return class name of first form in the document
console.log(document.forms[0].classList) // return class list of first form in the document


console.log(document.links) // return all the links in the document
console.log(document.images) // return all the images in the document
console.log(document.scripts) // return all the scripts in the document */



/* How to access DOM elememts using the document object(Java Script)
    1.id
    2.querySelector // 1 and 2 access only one element
    3.class
    4.tag
    5.querySelectorAll    // 3, 4 and 5 access multiple elements
*/ 

/* // Id(Unique)
let p = document.getElementById("para")
p.style.backgroundColor = "red"
p.innerText = "Hello World"
console.log(p.outerHTML)

// class name need not to be unique
let p1 = document.getElementsByClassName("myClass")
console.log(p1[0].outerHTML) // Gives Collection (Array) 
console.log(p1[1].outerHTML)

// Tags : returns a collection of elements

var tags = document.getElementsByTagName('p')
console.log(tags[0].outerHTML)
console.log(tags[1].outerHTML)

// Query Selector : returns only single element

var query_Selector_id = document.querySelector("#para")
console.log("1")

var query_Selector_tags = document.querySelector('h2')
console.log(query_Selector_id.outerHTML)

console.log(query_Selector_tags.outerHTML)

var query_Selector_className = document.querySelector(".myClass")
console.log(query_Selector_className.outerHTML)

// querySelectorAll() --> return multiple elements in an Arrray

const k1 = document.querySelectorAll(".myClass")
console.log(k1)
const k3 = document.querySelectorAll("#para")
console.log(k3)
const k2 = document.querySelectorAll("p")
console.log(k2)
 */


 
/* 
    Traversing of DOM : 
    navigating DOM Tree using 
    1.parent --> parentElement()
    2.siblings --> previousSibling(), nestSibiling()
    3.child  --> firstChild() , LastChild() , Children
 */

let mydiv = document.getElementById("myDiv")
console.log(mydiv.outerHTML)

mydiv.style.backgroundColor = "pink"

//parent 
var parent = mydiv.parentElement
parent.style.backgroundColor = 'yellow'



//siblings

var prevSibling = mydiv.previousElementSibling
prevSibling.style.backgroundColor = "red" 
console.log(prevSibling)

var nextSibling = mydiv.nextElementSibling
nextSibling.style.backgroundColor = "red" 
console.log(nextSibling)


//child

var firstEleChild = mydiv.firstElementChild
firstEleChild.style.color = "Blue"
console.log(firstEleChild)

var lastEleChild = mydiv.lastElementChild
lastEleChild.style.color = "Red"
console.log(lastEleChild)

var allChildren = mydiv.children
console.log(allChildren)
console.log(allChildren[0])

// How to access nth child

var nthChild = document.querySelector("#myDiv > *:nth-child(2)")
// Syntax to get nth child   css selector

console.log(nthChild)




/* DOM manipulation : 
    changing(update) , adding , deleting elements 
*/

var para_ele = document.createElement('p')
para_ele.innerText = "I am created (para)"
para_ele.id = "para_ele"
para_ele.className = "myClass"
para_ele.style.color = "Red"
/* var text= document.createTextNode("Hello I am para") // WE can get data from DB
para_ele.appendChild(text) */
/* console.log(para_ele.outerHTML)
console.log(text) */
mydiv.appendChild(para_ele)
//mydiv.appendChild(para_ele) // adds at last


/* INSERT BEFORE */
var h2 = document.createElement('h1')
h2.innerText = ("Hello I am inserted before you ")
h2.style.backgroundColor = "White"
console.log(h2.outerHTML)

mydiv.insertBefore(h2 , para_ele)

//para_ele.textContent = "I am Updated"


/* Update  
        --> replace()
    to replace we need parent , updatedOne , replacedOne
*/

var h1_toReplace = document.getElementById('replace')
var parent_div = document.getElementById("parent")

var h2_replace = document.createElement("h2")
h2_replace.textContent = "h1 is replaced with h2" 

parent_div.replaceChild(h2_replace , h1_toReplace)



/* 
    Delete : 

    remove()
*/
//  parent_div.removeChild(h2_replace)




/// adding Event Listeners
var b = document.getElementById("button")
var btnFun = () => b.innerText = "you clicked me"
b.addEventListener('click', btnFun, false) 
// false means event bubbling  true means event capturing