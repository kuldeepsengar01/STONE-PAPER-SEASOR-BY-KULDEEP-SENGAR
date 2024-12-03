let yourscore=0;
let compscores=0;

// axis button
let bt=document.querySelectorAll(".choice");
let userscore=document.querySelector("#userscore");
let compscore=document.querySelector("#compscore");
let msg=document.querySelector("#mass");

// array 
let getcompchoice=() => {
  let options=["stone","paper","seasor"];
  let renidx=Math.floor(Math.random()*3)
  let idx=Math.random();
  console.log(idx);
}

// drow game
 const drowgame=() =>{
   console.log("gane was draw");
   msg.innerHTML="Game Draw Play again";
   msg.style.background="black";
 }

//generated computer choice
let gntcompchoice=() => {
  let options=["stone","paper","seasor"];
  let renidx=Math.floor(Math.random() * 3);
  return options[renidx];
}


const playgame=(userchoice) =>{
  console.log("user choice=",userchoice);
  let compchoice=gntcompchoice();
  console.log("comp choice=",compchoice);
  if(userchoice===compchoice){
    drowgame();
  }
else {
  userwin=true;
  if(userchoice==="stone"){
    userwin=compchoice==="paper" ? false:true;
  }
  else if(userchoice==="paper"){
    userwin=compchoice="seasor" ? false:true;
  }
  else{
    userwin=compchoice==="stone" ? false:true;
  }
  showwinner(userwin);
}
}
// user choose

bt.forEach((btn) =>{
  btn.addEventListener("click",() =>{
    let userchoice=btn.getAttribute("id");
    console.log(userchoice);
    playgame(userchoice);
  });
});


//show winner()
const showwinner=(userchoice,compchoice) => {
  if(userwin===true){
    msg.innerHTML="You win !";
    msg.style.background="green";
    yourscore++;
    userscore.innerHTML=yourscore;
    console.log("you win");
  }
  else{
    msg.innerHTML="You lose"
    msg.style.background="red";
    compscores++;
    compscore.innerHTML=compscores;
    console.log("you lose");
  }
}