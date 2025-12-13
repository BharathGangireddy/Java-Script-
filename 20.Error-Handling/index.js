/* console.log(name) // Have some issues with Browser It does not throw Error
 console.log("12")
 console.log("!23234")
 */
 /* 
    try {
        // tests code if any error it will throw error and sends to catch
    }catch(e) {
        e.message
    }

    --> It stops executing the next steps, when catch throw error
    -->  best practice is to keep the error throwing in try catch

 */
    console.log("1")

    try {
        console.log("2")
        console.log(name_1) // reference error throw here , it stops executing the next code lines
        console.log("3") // it will not display 
    }catch(e) {
        console.log("error catched")
    }
    console.log("12")
    console.log("!23234")



/* 
    with the help of ''throw'' we can customise the error
*/

var age = 18;

if (age <= 18) 
    throw 'age should be greater than 18';
else
    console.log(age, 'Having greater than 18');
