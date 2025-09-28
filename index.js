let computers_choice; 
let users_choice;
let players_choices;

function generateComuptersChoice() {
    let num = Math.floor(Math.random()*10);
    if(num <= 3) {
        computers_choice = "Rock";
    }
    else if(num > 3 && num <= 6) {
        computers_choice = "Paper";
    }
    else {
        computers_choice = "Scissors";
    }
}

function captureUsersChoice() {
    users_choice = prompt("Choose one: Rock, Paper, or Scissors.", "");
    toString(users_choice);
}

function showChoices() {
    players_choices = `Computer's choice is ${computers_choice} and your choice is ${users_choice}.`;
    console.log(players_choices);
}

