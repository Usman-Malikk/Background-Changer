const hexcolors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E']
let btn= document.getElementById("but")
let h2 = document.getElementById("h22")
btn.addEventListener('click',function()
{
let nc='#';

for(let i=0;i<6;i++)
{
    nc+=hexcolors[getrn()];
}
document.body.style.backgroundColor=nc
h2.innerHTML=nc
})
function getrn(){
    return Math.floor(Math.random()*hexcolors.length);
}
