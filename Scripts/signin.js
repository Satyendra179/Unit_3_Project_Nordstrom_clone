import { futter, navbar } from  "./futter.js";
let f =document.getElementById('futter');
f.innerHTML=futter();
let newnav= document.getElementById('newnav');
newnav.innerHTML=navbar();





document.getElementById('checkbox').addEventListener('click', ShowPassword)
function ShowPassword() {
    let x = document.getElementById("password");
    
    
    if(x.type ==="password"){
      x.type = "text";
      
    }else{
      x.type= "password";
    }
  }



  document.querySelector('form').addEventListener('submit', login);
  function login(){
    event.preventDefault();
    let userEmail=document.getElementById('email').value;
    let userPass= document.getElementById('password').value;
    let inobj={};
    inobj.email=userEmail; 
    inobj.pass=userPass;
   
    let indata =JSON.parse(localStorage.getItem('indata'))
    let data=JSON.parse(localStorage.getItem("userdata"));
    data.forEach((el) => {
        
        if(el.email==userEmail && el.pass===userPass && indata===null){
            let indat=[]; 
            inobj.name=el.name;
            console.log(inobj)
            console.log(el)
            indat.push(inobj);
            localStorage.setItem('indata', JSON.stringify(indat))
            alert('Login Successful');
            window.location.href="index.html";
        }else if(el.email===userEmail && el.pass!==userPass && el===data[data.length-1] ){
            alert('Wrong Password or wrong email addresss')
        }
           
    })
    
  }