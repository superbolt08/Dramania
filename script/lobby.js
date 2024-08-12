
//local lobby
document.getElementById('playerName').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addPlayer();
    }
});

function addPlayer() {
    const playerNameInput = document.getElementById('playerName');
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        const playersContainer = document.querySelector('.players');
        if (playersContainer.children.length < 8) {
            const playerSlot = document.createElement('div');
            playerSlot.className = 'player-slot';
            playerSlot.innerHTML = `
                ${playerName}
                <span class="remove" onclick="removePlayer(this)">&#10060;</span>
            `;
            playersContainer.appendChild(playerSlot);
            playerNameInput.value = '';
        } else {
            alert('Maximum 8 players allowed.');
        }
    }
}

function removePlayer(element) {
    const playerSlot = element.parentElement;
    playerSlot.remove();
}

function startGame() {
    const players = document.querySelectorAll('.player-slot');
    if (players.length >= 2) {
        const playerNames = [];
        players.forEach(player => {
            let name = player.textContent.trim();
            // Remove the last character if it is 'X'
            name = name.slice(0, -1);           
            playerNames.push(name);
        });
        // Save player names to local storage
        localStorage.setItem('playerNames', JSON.stringify(playerNames));
        alert(`Starting game with players: ${playerNames.join(', ')}`);
        // Proceed to start the game
        window.location.href = 'game.html';
    } else {
        alert('Minimum 2 players required to start the game.');
    }
}









// multipage lobby

// Function to generate room code
// function generateRoomCode(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let code = '';
//     for (let i = 0; i < length; i++) {
//         code += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return code;
// }

// // Function to display the room code
// function displayRoomCode() {
//     const roomCode = generateRoomCode(4); // Generate a 4-character room code
//     document.getElementById('room-code').textContent = roomCode;
// }

// // Event listener to the button
// document.addEventListener('DOMContentLoaded', function() {
//     displayRoomCode();
// });

// function getUrlParameter(name) {
//     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//     const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//     const results = regex.exec(location.search);
//     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// }

// // Retrieve player's name from URL parameter
// const playerName = getUrlParameter('name');
// if (playerName) {
//     const playerList = document.getElementById('players-list');
//     const playerElement = document.createElement('div');
//     playerElement.textContent = playerName;
//     playerElement.classList.add('player', 'player-name');
//     playerList.appendChild(playerElement);
// }

