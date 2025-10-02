let computers_choice; 
let users_choice;
let players_choices;
let computer_score;
let user_score;
let global_score = `Computer ${computer_score} : ${user_score} User`;

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

function playRound(computers_choice, users_choice) {
    let roundStatus;
    if(computers_choice == users_choice) {
        roundStatus = "draw";
    }
    else if(computers_choice == "Rock" && users_choice != "Paper") {
        computer_score++;
        roundStatus = "computer_won";
    }
    else if(computers_choice == "Paper" && users_choice != "Scissors") {
        computer_score++;
        roundStatus = "computer_won";
    }
    else if(computers_choice = "Scissors" && user_score != "Rock") {
        computer_score++;
        roundStatus = "computer_won";
    }
    else {
        user_score++;
        roundStatus = "user_won";
    }

    console.log(roundStatus);
    console.log(global_score);
}

function playGame() {
    generateComuptersChoice();
    captureUsersChoice();
    showChoices();
    playRound(computers_choice, users_choice);
}