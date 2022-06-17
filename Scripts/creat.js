import { futter, navbar } from  "./futter.js";
let f =document.getElementById('futter');
f.innerHTML=futter();
let newnav= document.getElementById('newnav');
newnav.innerHTML=navbar();


let emai=JSON.parse(localStorage.getItem('email'));
// console.log(emai)
document.getElementById('createmail').innerText=emai[0]; 

        let data = JSON.parse(localStorage.getItem('userdata')) || [];
        document.getElementById('form').addEventListener('submit', creatAc);
        function creatAc(){
            event.preventDefault();
            let data_obj={}

            data_obj.email=emai[0];
            let name1=document.getElementById('name').value;
            let last_name = document.getElementById('name2').value;
            data_obj.name= name1+" "+last_name;
            data_obj.pass =document.getElementById('pass').value;
            // console.log(data_obj)
            data.push(data_obj);
            localStorage.setItem('userdata',JSON.stringify(data))

            






    }