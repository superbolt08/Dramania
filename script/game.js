let currentPlayerIndex = 0;
let currentRound = 1;
const players = JSON.parse(localStorage.getItem('playerNames')) || [];
let prompts = [];

// Fetch prompts from the JSON file
fetch('script/prompts.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    prompts = data.prompts;
    // Initialize game or update UI with prompts
    updateGameScreen();
  })
  .catch(error => console.error('Error loading prompts:', error));

// Function to update the game screen with the current player and a random prompt
function updateGameScreen() {
    console.log('Game screen updated with prompts:', prompts);
    // Update round number
    document.querySelector('.round-number').textContent = `Round ${currentRound}`;

    // Set the current player name
    const playerName = players[currentPlayerIndex];
    document.querySelector('.player-display').textContent = playerName;

    // Select a random prompt
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    document.querySelector('.prompt-display').textContent = randomPrompt;
}

// Function to move to the next player and update the screen
function nextPlayer() {
    currentPlayerIndex++;
    if (currentPlayerIndex >= players.length) {
        currentPlayerIndex = 0; // Reset to the first player
        currentRound++; // Increment the round number
    }
    updateGameScreen(); // Update the display with the new player and prompt
    if (currentRound > 3) { // Check if the game has finished 3 rounds
        window.location.href = 'end.html'; // Redirect to the end page
    } else {
        updateGameScreen(); // Update the display with the new player and prompt
    }
}

// Initial update to set the first player and prompt
document.addEventListener("DOMContentLoaded", () => {
    updateGameScreen(); // Call the function to set the initial state
});