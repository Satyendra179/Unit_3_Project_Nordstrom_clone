import { futter, navbar } from  "./futter.js";
let f =document.getElementById('futter');
f.innerHTML=futter();
let newnav= document.getElementById('newnav');
newnav.innerHTML=navbar();
async function append(){
    let res = await fetch("https://mini-backend179.herokuapp.com/api/women");
    let data= await res.json();
    console.log(data)
    appen(data)
}

 append()
function appen(data){
    let mydiv=document.getElementById('seen');

    data.forEach((el)=>{
let div=document.createElement('div');
let image=document.createElement('img');
image.src=el["_3qqaW src"];
// console.log(image)
let type = document.createElement('p');
type.innerText =el["_3bxgt"]
let color=document.createElement('p');
color.innertext=el["_157hG"];
let inr_price= document.createElement('p');
inr_price.innerText=el["_3EVks"];
let price= document.createElement('p');
price.innerText=el["_3EpZ_"];
let  btn=document.createElement('button');
btn.innerText="Add To Bag";
// btn.addEventListener('click', hello(){
// addtocart(image,price,inr_price,type,color,index);
// })
div.append(image,type,color,inr_price,price,btn)
mydiv.append(div)
let t = el["_3bxgt"];
// t.innerText =
let c=el["_157hG"];
// color.innertext=el["_157hG"];
let inr_p= document.createElement('p');
inr_p.innerText=el["_3EVks"];
let p= document.createElement('p');
price.innerText=el["_3EpZ_"];




    })
}