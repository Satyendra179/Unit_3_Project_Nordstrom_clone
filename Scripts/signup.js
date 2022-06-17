
import { futter, navbar } from  "./futter.js";
let f =document.getElementById('futter');
f.innerHTML=futter();
let newnav= document.getElementById('newnav');
newnav.innerHTML=navbar();






document.getElementById('submit').addEventListener('click', signuppage);
function signuppage(){
    let email=document.getElementById('email').value;
    let email_arr=[]
    email_arr.push(email);
    localStorage.setItem('email',JSON.stringify(email_arr))
    window.location.href= "creat.html"
}
    