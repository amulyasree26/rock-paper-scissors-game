function play(playerChoice) {

    const choices = ["Rock", "Paper", "Scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "Draw!";
    }
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win!";
    }
    else {
        result = "Computer Wins!";
    }

    document.getElementById("playerChoice").innerText =
        "You: " + playerChoice;

    document.getElementById("computerChoice").innerText =
        "Computer: " + computerChoice;

    document.getElementById("result").innerText =
        result;
}
