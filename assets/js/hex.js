

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    var hexcolor="#";
    for(var i=0;i<6;i++)
    {
        hexcolor+=hex[getRandomNumber()];
    }
    document.body.style.backgroundColor=hexcolor;
    color.textContent=hexcolor;
    color.style.color=hexcolor;

})

function getRandomNumber(){
    const randomNumber=Math.floor(Math.random()*hex.length);
    return randomNumber;
}


function myFunction(){
    const text=document.querySelector(".color").textContent;
    var dummy=document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value=text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
   alert("copied "+text);
}
