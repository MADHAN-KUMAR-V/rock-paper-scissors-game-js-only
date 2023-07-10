//rock , paper, scissors game
let playGame = confirm("Shall we play the rock, paper, scissors ?");
if(playGame){
   //player input
   let playerChoice = prompt("Please enter rock,paper,scissors");
   if(playerChoice){
      let playerOne = playerChoice.trim().toLowerCase();
      if(playerOne === "rock" || playerOne == "paper" || playerOne == "scissors"){
         //computer choise
         let computerChoice = Math.floor(Math.random()*3 + 1);
         let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
         let result = 
         //result
            playerOne === computer ? "tie game":
            playerOne === "rock" && computer === "paper" ? "computer wins" :
            playerOne === "paper" && computer === "scissors" ? "computer wins" :
            playerOne === "scissors" && computer === "rock" ? "computer wins":
            "player wins"
      alert(result);
      let playAgain = confirm("play Again");
      playAgain ? location.reload(): "Ok! Thanks for playing";

      }else{
        alert("you didn't enter rock,paper,scissor"); 
      }
   }else{
      alert("I guess you change the mind.")
   }

}else{
   alert("ok maybe next time.")
}