let computers_choice; 

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

