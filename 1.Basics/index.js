function addTwoNumbers () {
    var x = 10;
    var y = 15;
    var sum = x + y;
    return sum;
}

var result = addTwoNumbers();
console.log(result);

const body = document.getElementById('body');
console.log(body)

if (result) {
    
    for (let i = 0; i < 10; i++) {
        const h1 = document.createElement('h1');
        body.appendChild(h1);
        h1.innerText = "Result = " + result;
        console.log(i, result);
    }

} else {
    console.log("sum is not defined");
}
