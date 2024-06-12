const stone = document.getElementById("stone");



const paper = document.getElementById("paper");

const sissor = document.getElementById("sissor");

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const exit = document.getElementById("exit");
const box = document.querySelector(".box");

const history = document.getElementById("history");



function work (){
    
    
    stone.addEventListener("click",()=>{
       let computer = Math.floor(Math.random()*3);
       let playerchoice = "stone";
       let comScore = computer === 0 ? "stone" :computer === 1 ? "paper" :"sissor";
       h2.innerHTML = "COMPUTER :  "+comScore;
       if(playerchoice === comScore){
         h1.innerHTML = "match draw";      
         box.style.backgroundColor = "grey"; 
         h1.style.color = "darkgrey";  
       } 
       else if(comScore === "sissor"){
            h1.textContent = "you win";
            box.style.backgroundColor = "lightgreen";
            h1.style.color = "green";  
       } 
       else{
        h1.innerHTML = "you lose";
        box.style.backgroundColor = "lightcoral";
        h1.style.color = "red";  
       }
    })


    paper.addEventListener("click",()=>{
       let computer = Math.floor(Math.random()*3);
       let playerchoice = "paper";
       let comScore = computer === 0 ? "stone" :computer === 1 ? "paper" :"sissor";
       h2.innerHTML = "COMPUTER : "+comScore;
       if(playerchoice === comScore){
         h1.innerHTML = "match draw";  
         box.style.backgroundColor = "grey";   
         h1.style.color = "darkgrey";    
       } 
       else if(comScore === "sissor"){
            h1.textContent = "you loose";
            box.style.backgroundColor = "lightcoral";
            h1.style.color = "red";  
       } 
       else{
        h1.innerHTML = "you win";
        box.style.backgroundColor = "lightgreen";
        h1.style.color = "green";  
      }
    })



    sissor.addEventListener("click",()=>{
       let computer = Math.floor(Math.random()*3);
       let playerchoice = "sissor";
       let comScore = computer === 0 ? "stone" :computer === 1 ? "paper" :"sissor";
       h2.innerHTML = "COMPUTER : "+comScore;
       if(playerchoice === comScore){
         h1.innerHTML = "match draw"; 
         box.style.backgroundColor = "grey";   
         h1.style.color = "darkgrey";   
       } 
       else if(comScore === "paper"){
            h1.textContent = "you win";
            box.style.backgroundColor = "lightgreen";
            h1.style.color = "green";  
       } 
       else{
        h1.innerHTML = "you loose";
        box.style.backgroundColor = "lightcoral";
        h1.style.color = "red";  
       }
    })
}
exit.addEventListener("click",()=>{
  window.location.href="exit.html";
});