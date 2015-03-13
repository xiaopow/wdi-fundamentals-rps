////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var playerMove, computerMove;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner = "";
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (computerMove == playerMove) {
    	winner = "tie";
    } else if (computerMove == "rock" && playerMove == "scissors") {
    	winner = "computer";
    } else if (computerMove == "rock" && playerMove == "paper") {
    	winner = "player";
    } else if (computerMove == "paper" && playerMove == "rock") {
    	winner = "computer";
    } else if (computerMove == "paper" && playerMove == "scissors") {
    	winner = "player";
    } else if (computerMove == "scissors" && playerMove == "paper") {
    	winner = "computer";
    } else if (computerMove == "scissors" && playerMove == "rock") {
    	winner = "player"
    } else if (playerMove == "quit") {
        winner = "quit"
    } else {
    	console.log("invalid Player input");
    	getInput();
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins<5&&computerWins<5) {
    	var result = getWinner(getPlayerMove(),getComputerMove())
    	if (result=="quit") {
    	    return;
    	}
    	else if (result=="player") {
    		playerWins++;
    	} else if (result=="computer"){
    		computerWins++;
    	}

    
    console.log("\nPlayer chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    } if (playerWins>computerWins) {
        console.log("Player Wins");
    } else console.log("Computer Wins");
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors. First to "+x+" wins!");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins<x&&computerWins<x) {
    	var result = getWinner(getPlayerMove(),getComputerMove())
    	if (result=="quit") {
    	    return;
    	}
    	else if (result=="player") {
    		playerWins++;
    	} else if (result=="computer"){
    		computerWins++;
    	}

    
    console.log("\nPlayer chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    } if (playerWins>computerWins) {
        console.log("Player Wins");
    } else console.log("Computer Wins");
}

