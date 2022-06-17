
import { futter, navbar } from  "./futter.js";
let f =document.getElementById('futter');
f.innerHTML=futter();
let newnav= document.getElementById('newnav');
newnav.innerHTML=navbar();

let divsign=document.getElementById('divsign');
let signeddata=JSON.parse(localStorage.getItem('indata'));
if(signeddata!==null){
    divsign.innerHTML=null;
    let logout= document.createElement('h1');
    console.log(signeddata[0])
    logout.innerText= signeddata[0].name+" "+"WelCome  To Nordstrom";
    divsign.append(logout);
    
}
// logout.addEventListener('click', logout(){
        
// })

let slide= () => {
    let i=0;
   
    let Images =["./images/salegif.gif","./images/10002.gif"]
    let container= document.getElementById('postersale');
    let para= ["Preview Starts June 29","And get a $40 Bonus Note as a new Nordstrom credit cardmember. Restrictions apply." ];
    let im= document.createElement('img');
    im.src=Images[0];
    container.append(im);
    let conta = document.getElementById('giftslide')
    let imagees=["./images/10004.jpeg","./images/10005.jpeg"]
let  slide = setInterval( () =>{
    container.innerHTML=null;
    if(i===Images.length){
        i=0;
    }
let image = Images[i];

let para1= para[i];
let img= document.createElement('img');
img.src=image;

// document.body.container.style.backgroundImage = "url(./images/salegif.gif)"
    if(i===0){
        let head=document.createElement('h2');
        head.innerText=para1;
        
        container.append(img,head);
    }else{
        let p1=document.createElement('p');

        p1.innerText = para1;
        container.append(img,p1);
    }
 i++
},3000)
setInterval( () => {
    conta.innerHTML=null;
    if(i===imagees.length){
        i=0;
    }
    let ima =imagees[i]
    let imgg = document.createElement('img');
    imgg.src=ima;
    conta.append(imgg)

// console.log(imgg)


},3000)
document.getElementById('gifts').addEventListener('click', gift);
function gift() {
window.location.href="gift.html"
}

container.addEventListener("mouseover", myfunction )
function myfunction(){
// clearInterval(slide)
}
container.addEventListener("click", myclick)
function myclick(){
    window.location.href="sale.html"
}
}
slide();
//https://mini-backend179.herokuapp.com/api/mensdata



// function addtocart(image,price,inr_price,type,color,index){
//     let cartdata=JSON.parse(localStorage.getItem('cartdata')) || [];
//     let cartobj={}
//     cartobj.price=price;
//     cartobj,image=image;

    
// }
async function append(){
    let res = await fetch("https://mini-backend179.herokuapp.com/api/mensdata");
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