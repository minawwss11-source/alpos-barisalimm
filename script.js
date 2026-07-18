const questions=[

{
q:"Bana hâlâ kızgın mısın? 🥺",
escape:"yes"
},

{
q:"Benimle ömür boyu küs mü kalacaksın? 💔",
escape:"yes"
},

{
q:"Barıştığımız günleri özlemedin mi? 🌸",
escape:"yes"
},

{
q:"Tekrar eskisi gibi barışalım, bir daha küsmeyelim mi? 🤍",
escape:"no"
},

{
q:"Beni affedip yeniden güzel günlerimize döner misin? ❤️",
escape:"no"
},

{
q:"Beni bana benzeyen bir kızla aldatır mıydın? 😤❤️",
escape:"yes"
}

];


let index=0;
let kaç=0;


const question=document.getElementById("question");
const yes=document.getElementById("yes");
const no=document.getElementById("no");



function show(){

question.innerHTML=questions[index].q;

yes.style.position="static";
no.style.position="static";

}

show();



yes.onclick=()=>{

if(questions[index].escape=="yes"){

kaç++;

yes.style.position="absolute";

yes.style.left=Math.random()*80+"%";
yes.style.top=Math.random()*80+"%";

if(kaç>=30){

yes.style.display="none";

}

}else{

next();

}

};



no.onclick=()=>{

if(questions[index].escape=="no"){

kaç++;

no.style.position="absolute";

no.style.left=Math.random()*80+"%";
no.style.top=Math.random()*80+"%";


if(kaç>=30){

next();

}

}else{

next();

}

};



function next(){

kaç=0;

index++;


if(index>=questions.length){

document.getElementById("game").style.display="none";

document.getElementById("finish").classList.remove("hidden");

heartRain();

return;

}


show();

}



function heartRain(){

setInterval(()=>{

let h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.top="-20px";

h.style.fontSize="25px";

document.body.appendChild(h);


setTimeout(()=>{

h.remove();

},4000);


},200);

}