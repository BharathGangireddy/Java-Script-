var button = document.getElementById('button');
console.log(button.outerHTML)

var onClick = () => button.textContent = 'Button clicked!';
button.addEventListener('click' , onClick,) // Function call from outside
//button.addEventListener('click', () => console.log('Button clicked!'))
// --> arrow function inside

/* var subchildFunction = (e) => //{child.style.backgroundColor = "yellow"}
{
    console.log('subChild clicked');
    //console.log(e) //  gives event object evey time
}
var subchild = document.getElementById('subchild');
subchild.addEventListener('click' , subchildFunction, true) // capturing phase
 

var childFunction = (e) =>
{
    console.log('child clicked');
    //console.log(e) //  gives event object evey time
}
var child = document.getElementById('child');
child.addEventListener('click' , childFunction,true)

var parentFunction = (e) =>
{
    console.log('parent clicked');
    //console.log(e) //  gives event object evey time
}
var parent = document.getElementById('parent');
parent.addEventListener('click' , parentFunction, true)  */

console.log("1234567890")

var subchildFunction = (e) => //{child.style.backgroundColor = "yellow"}
{
    console.log('subChild clicked');
    //console.log(e) //  gives event object evey time
}
var subchild = document.getElementById('subchild');
subchild.addEventListener('click' , subchildFunction) // capturing phase
 

var childFunction = (e) =>
{
    console.log('child clicked');
    //console.log(e) //  gives event object evey time
    console.log(e.clientX)//calculate measure from left side of viewport
    console.log(e.clientY)//calculate measure from top side of viewport
    console.log(e.target)
    e.stopPropagation()// to stop further propagation of event
}
var child = document.getElementById('child');
child.addEventListener('click' , childFunction)

var parentFunction = (e) =>
{
    console.log('parent clicked');
    //console.log(e) //  gives event object evey time
}
var parent = document.getElementById('parent');
parent.addEventListener('click' , parentFunction) 