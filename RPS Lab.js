/*RPS Game*/
var hand = ['rock', 'paper', 'scissors'];

function playGame(player1, computer2, playUntil){


    while(playerWin < playUntil && computer2 < playUntil){

        function getHand(){
            let rand = Math.random();

            if(rand < 0.34){
                return hand[0];
            } else if(rand < 0.67){
                return hand[1];
            } else{
                return hand [2];
            }
        }

var computerHand = getHand();
var userHand = getHand();

console.log('Your Hand: ' + userHand );
console.log('Computer Hand: ' + computerHand);

        function compare(){
            if (computerHand == userHand){
                return "The result is a tie!";
            }

            if(computerHand=="rock"){
                 if(userHand=="scissors"){
                    computerWin++;
                    return "You lost!";
                 }
                    else{
                    playerWin++;
                    return "You won!";
                 }
            }

            if(computerHand=="paper"){
                if(userHand=="rock"){
                computerWin++;
                return "You lost!";
                }
                else{
                playerWin++;
                return "You won!";
                }
            }

            if(computerHand=="scissors"){
                if(userHand=="rock"){
                playerWin++;
                return "You won!";
                }
                else{
                computerWin++;
                return "You lost!";
                }
            }
        }

        console.log(compare(userHand,computerHand));
    }
    console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1 + ' had ' + playerWin);
};
​
playGame('Jimmy', 'Computer', 5);





//OTHER TRY AT RPS
/*
var rPs = ["Rock", "Paper", "Scissors"];

var you = rPs[Math.floor(Math.random() * 3)];

var computer = rPs[Math.floor(Math.random() * 3)];


random(you, computer);

function random(you, computer){
    if (you===computer){
         console.log ("It's a tie!");
    } else if (you==="Rock" && computer === "Scissors" || you === "Paper" && computer==="Rock"||you==="Scissors"&&computer==="Paper") {
         console.log ("You've won!");
    } else {
         console.log ("You've lost!");
    }
}