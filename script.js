function showPage(page){

let pages=document.querySelectorAll(".page");

pages.forEach(function(p){
p.style.display="none";
});

document.getElementById(page).style.display="block";

}

function toggleSection(id){

let section=document.getElementById(id);

if(section.style.display==="block"){
section.style.display="none";
}
else{
section.style.display="block";
}

}

window.onload=function(){

showPage("page1");

createBubbleLoop();

}


/* bubble generator */

function createBubbleLoop(){

setInterval(function(){

const bubble=document.createElement("div");

bubble.classList.add("bubble");

const size=Math.random()*120+60;

bubble.style.width=size+"px";
bubble.style.height=size+"px";

bubble.style.left=Math.random()*100+"vw";

bubble.style.bottom="-150px";

bubble.style.animationDuration=(Math.random()*15+10)+"s";

document.body.appendChild(bubble);

setTimeout(()=>{
bubble.remove();
},20000);

},2000);

}