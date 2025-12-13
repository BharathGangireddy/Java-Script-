/* 
Web Storage API provides mechanisms by which browsers can store key/value pairs, 
locally within the user's browser.

There are two types of web storage:
1. localStorage - Data stored in localStorage has no expiration time. 
   It remains even when the browser is closed and reopened.
    
2. sessionStorage - Data stored in sessionStorage is cleared when the page session ends. 
   A page session lasts as long as the browser is open and survives over page reloads and restores.
   However, opening a page in a new tab or window will cause a new session to be initiated.
*/
// let set_Item = document.getElementById('setItem');
// let get_Item = document.getElementById('getItem');
// let delete_Item = document.getElementById('delete')
// let clear_all = document.getElementById('remove')

// setItemFunction = () => {
//     localStorage.setItem('name_1' , 'DJ Tillu');
//     localStorage.setItem('name_2' , 'DJ Tillu 2');
//     localStorage.setItem('name_3' , 'DJ Tillu 3');
//     localStorage.setItem('name_4' , 'DJ Tillu 4');
//   }   
 let Container = document.getElementById('container')
//  getItemFunction = () => {
//     let data = localStorage.getItem('name_1');
//     let p1 = document.createElement('p');
//     p1.innerText = `name_1 : ${data}`;
//     Container.appendChild(p1);
    
//     var d1 = document.createElement('div');
//     var del_btn = document.createElement('button');
//     del_btn.innerText = 'Delete name_1';
//     d1.appendChild(del_btn);
//     Container.appendChild(d1);  
    
//     functiondelete = () => {
//         localStorage.removeItem(data)
//         Container.removeChild(p1)
//         Container.removeChild(d1)
//     }
//     del_btn.addEventListener('click' , functiondelete)
//     }
    
// getDeleteFunction =() => localStorage.removeItem('DJ Tillu')
// clearFunction = () => localStorage.clear(); // removes all 

// set_Item.addEventListener('click' , setItemFunction);
// get_Item.addEventListener('click' , getItemFunction);
// delete_Item.addEventListener('click' , getDeleteFunction);
// clear_all.addEventListener('click' , clearFunction);


let set_SessionItem = document.getElementById('setSessionItem');
let get_SessionItem = document.getElementById('getSessionItem');
let delete_SessionItem = document.getElementById('deleteSessionItem');
let clear_SessionAll = document.getElementById('removeSessionAll');

var s_set_SessionItem  = () => {
    sessionStorage.setItem('name' , "Session 1") 
    sessionStorage.setItem('name_2' , "Session 2")
    sessionStorage.setItem('name_3' , "Session 3")
}

s_get_SessionItem = () => {
    Object.keys(sessionStorage).forEach((Item) => {
        let value = sessionStorage.getItem(Item)
        //console.log(Item , value)
    let p2 = document.createElement('p')
    p2.textContent =`${Item} : ${value}`
    Container.appendChild(p2)

    deletebtn_session = () => {
        "12323213"
        Container.removeChild(p2);
        Container.removeChild(delete_btn);
    }
    
    let delete_btn = document.createElement("button")
    delete_btn.innerHTML = '<i class="fa-solid fa-trash"></i>' 
    Container.appendChild(delete_btn)   

    delete_btn.addEventListener('click' , deletebtn_session);
    })

}


clear_session_function = () =>sessionStorage.clear(); // clears Every session store
set_SessionItem.addEventListener('click' , s_set_SessionItem);
get_SessionItem.addEventListener('click' , s_get_SessionItem);
clear_SessionAll.addEventListener('click' , clear_session_function)


/// Practice 

/// 
/* let getButton  = document.getElementById('get_btn')
let localStorage_Customer_Details = {

    name_1 : "Bharath" ,
    name_2 : "SaiRam",
    name_3  : "Vasanth"
}

for(var i in localStorage_Customer_Details)
 {
   localStorage.setItem(i,localStorage_Customer_Details[i])
 }

var getLocalStorage = () => {
    Object.keys(localStorage).forEach((item)=> {
    console.log(localStorage[item]) // It is dynamic so we used [] 
})

}
getButton.addEventListener('click' , getLocalStorage)

console.log(localStorage_Customer_Details)
 */