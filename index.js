
const rollDice = () => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomDiceImage1 = `images/dice${randomNumber1}.png` //dice1.png - dice6.png
    const player1DiceImage = document.querySelectorAll("img")[0];
    player1DiceImage.setAttribute("src", randomDiceImage1); //change image to the correct dice image
    
    
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const randomDiceImage2 = `images/dice${randomNumber2}.png` //dice1.png - dice6.png
    const player2DiceImage = document.querySelectorAll("img")[1];
    player2DiceImage.setAttribute("src", randomDiceImage2);
    
    
    // game results
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerText = "Draw!";
    }
}
