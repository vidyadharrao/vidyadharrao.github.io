// Game variables
var car = document.getElementById('car');
var obstacles = document.getElementById('obstacles');
var road = document.getElementById('road');
var lanes = document.querySelectorAll('.lane');
var carX = 400;
var carY = 300;
var carSpeed = 5;
var obstacleInterval = 1000;
var obstacleWidth = 50;
var obstacleHeight = 50;
var score = 0;
var level = 1;
var gameInterval = null;

// Game function
function game() {
        // Update car position
        car.style.left = carX + 'px';
        car.style.top = carY + 'px';

        // Check for collisions with obstacles
        obstacles.innerHTML = '';
        for (var i = 0; i < lanes.length; i++) {
                var lane = lanes[i];
                var obstacle = document.createElement('div');
                obstacle.className = 'obstacle';
                obstacle.style.top = lane.offsetTop + 'px';
                obstacle.style.left = lane.offsetLeft + 'px';
                obstacles.appendChild(obstacle);
        }

        // Move obstacles
        obstacles.innerHTML = '';
        for (var i = 0; i < lanes.length; i++) {
                var lane = lanes[i];
                var obstacle = document.createElement('div');
                obstacle.className = 'obstacle';
                obstacle.style.top = lane.offsetTop + 'px';
                obstacle.style.left = lane.offsetLeft + 'px';
                obstacles.appendChild(obstacle);
        }

        // Check for win condition
        if (carY > 550) {
                alert('You win!');
                clearInterval(gameInterval);
        }

        // Update game state
        carY += carSpeed;
        score++;
        document.getElementById('score').innerHTML = 'Score: ' + score;

        // Check for level completion
        if (score % 100 === 0) {
                level++;
                obstacleInterval -= 50;
                carSpeed += 0.5;
        }

        // Update game interval
        if (!gameInterval) {
                gameInterval = setInterval(game, obstacleInterval);
        }
}

// Start game
document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') {
                carY -= 5;
        }
        if (event.key === 'ArrowDown') {
                carY += 5;
        }
        if (event.key === 'ArrowLeft') {
                carX -= 5;
        }
        if (event.key === 'ArrowRight') {
                carX += 5;
        }
});

// Start game
game();
