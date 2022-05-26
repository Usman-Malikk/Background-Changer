const colors= ['#001f3f','#F012BE','#3D9970','#85144b','#B10DC9','orange']
let box = document.getElementById('box')
let btn = document.getElementById('but')
let h2 = document.getElementById('h22')
let nc=0;

btn.addEventListener("click",function(){
    nc = colors[getrandom()];
    
document.body.style.backgroundColor=nc
h2.innerHTML=nc


})
function getrandom(){
    return Math.floor(Math.random() * colors.length)
}