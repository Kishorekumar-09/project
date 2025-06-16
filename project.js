let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")


const genCompChoice =() =>{
  const options=["Rock","Paper","Scissor"];
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame=()=>{
    // console.log("game was draw");
    msg.innerText="Let's Try again ";
    msg.style.backgroundColor="green";
}

const showWinner =(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++
        userScorePara.innerText =userScore;
        console.log("Yoo Win");
        msg.innerText =` Congrats :),Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="aqua";
    } else{
        compScore++
        compScorePara.innerText =compScore;
        console.log("you Loss(: ");
        msg.innerText =`Oops (: ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    // console.log("comp Choice=",compChoice);
    

    if(userChoice==compChoice){
        drawGame();    
    }else{
        let userwin=true;
        if(userChoice=="Rock"){
        userwin=compChoice=="paper"?false:true;
        }else if(userChoice=="Paper"){
            userwin=compChoice=="Scissor"?false:true;
        }else {
            userwin=compChoice=="Rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
 };


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});  