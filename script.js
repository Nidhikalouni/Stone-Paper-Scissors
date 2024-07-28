let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScrorePara = document.querySelector("#user-score");
const compScrorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was Draw,Play again.";
    msg.Style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScrorePara.innerText = userScore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScrorePara.innerText = compScore;
        msg.innerText = `you lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompchoice();
    console.log("comp choice = ", compChoice);
    if(userChoice === compChoice){
        //Draw game
        drawGame();
    } else{
        let userWin = true;
        if (userChoice ==="stone"){
            //scissors , paper
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            //stone , scissors
            userWin = compChoice==="scissors" ? false : true;
        }else{
            //stone,paper
            userWin = compChoice==="stone" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});