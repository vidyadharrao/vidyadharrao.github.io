// Game variables
var playerCar = document.getElementById('player-car');
var computerCar = document.getElementById('computer-car');
var track = document.getElementById('lane');
var trackMap = document.getElementById('track-map');
var score = document.getElementById('score');
var trackLength = 800;
var playerSpeed = 5;
var computerSpeed = 5;
var playerX = 0;
var computerX = trackLength;
var gameInterval = null;

// Game function
function game() {
        // Update player car position
        playerCar.style.left = playerX + 'px';

        // Update computer car position
        computerCar.style.left = computerX + 'px';

        // Check for collisions with track end
        if (playerX >= trackLength) {
                alert('You win!');
                clearInterval(gameInterval);
        }

        // Update game state
        playerX += playerSpeed;
        computerX -= computerSpeed;

        // Update track map
        trackMap.innerHTML = '';
        for (var i = 0; i < trackLength; i++) {
                var trackSegment = document.createElement('div');
                trackSegment.className = 'track-segment';
                trackSegment.style.width = '10px';
                trackSegment.style.height = '100px';
                trackSegment.style.top = '0px';
                trackSegment.style.left = i + 'px';
                trackMap.appendChild(trackSegment);
        }

        // Update score
        score.innerHTML = 'Score: ' + Math.floor((playerX / trackLength) * 100);

        // Update game interval
        if (!gameInterval) {
                gameInterval = setInterval(game, 16);
        }
}

// Start game
game();
