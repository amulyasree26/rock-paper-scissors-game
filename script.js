function play(playerChoice) {

    const choices = ["Rock", "Paper", "Scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "🤝 Draw!";
    }
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "🎉 You Win!";
    }
    else {
        result = "😢 You Lose!";
    }

    document.getElementById("playerChoice").innerText =
        "Your Choice: " + playerChoice;

    document.getElementById("computerChoice").innerText =
        "Computer Choice: " + computerChoice;

    document.getElementById("result").innerText = result;
}
