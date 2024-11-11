/*let ifCond = "hi";
let print;
print = `hello ${ifCond}`;
console.log(print);  
*/
let playerValue ; 
let computerValue ;
let resultValue ;
let playAgain; 
do{

    playerValue = prompt("enter rock paper or scissor");
    if(playerValue){

        playerValue = playerValue.trim().toLowerCase();
        if( playerValue == "rock" || playerValue == "paper" || playerValue == "scissor"){
            playerValue = (playerValue == "rock") ? 0 : (playerValue == "paper") ?  1 :  2 ;
            computerValue = Math.floor((Math.random()*3));
        
            resultValue = (playerValue == computerValue) ? "tie" : (playerValue == 0 && computerValue == 1) ? "computer wins" : (playerValue == 2 && computerValue == 0 ) ? "computer wins" : (playerValue == 1 && computerValue == 2) ? "computer wins" : "player wins";
        
            console.log(`player input ${playerValue}\n computer input ${computerValue} \n result ${resultValue}`);

            alert(`player input ${playerValue}\n computer input ${computerValue} \n result ${resultValue}`);
            //playAgain = confirm("do you want play again");
        
        }else{
            alert("enter correct input");
            //playAgain = confirm("do you want to play again");
        }    
    }else if(playerValue == 0){
        alert("enter correct input");
        //playAgain = confirm("do you want to play again");
    }else{
        alert("thanks for playing!!\nplease come again");
        playAgain = 0;
        break;
    }
    playAgain = confirm("do you want to play again");
    if(playAgain != true) {
        alert("thanks for playing!!\nplease come again");
    }

}while( playAgain );

