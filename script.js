document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const openingScreen = document.getElementById('opening-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const gameBoard = document.getElementById('game-board');
    const startGameButton = document.getElementById('start-game');
    const rollButton = document.getElementById('roll-button');
    const diceContainer = document.getElementById('dice-container');
    
    // Start game button click event
    startGameButton.addEventListener('click', function() {
        // Hide opening screen with fade out animation
        openingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            openingScreen.classList.add('hidden');
            loadingScreen.classList.remove('hidden');
            loadingScreen.classList.add('fade-in');
            
            // Show loading screen for 4 seconds
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    gameBoard.classList.remove('hidden');
                    gameBoard.classList.add('fade-in');
                }, 500);
                
            }, 4000);
        }, 500);
    });
    
    // Roll button click event
    rollButton.addEventListener('click', function() {
        // Remove previous dice if exists
        const previousDice = document.querySelector('.dice');
        if (previousDice) {
            previousDice.remove();
        }
        
        // Generate random number between 1 and 6
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        
        // Create new dice element
        const dice = document.createElement('div');
        dice.className = 'dice';
        dice.textContent = randomNumber;
        
        // Position the dice in a random corner
        positionDiceRandomly(dice);
        
        // Add dice to the container
        diceContainer.appendChild(dice);
    });
    
    // Function to position dice in a random corner
    function positionDiceRandomly(dice) {
        // Define the four corners of the board
        const corners = [
            { top: '10%', left: '10%' },   // Top-left (red corner)
            { top: '10%', right: '10%' },  // Top-right (green corner)
            { bottom: '10%', right: '10%' }, // Bottom-right (yellow corner)
            { bottom: '10%', left: '10%' }  // Bottom-left (blue corner)
        ];
        
        // Select a random corner
        const randomCorner = corners[Math.floor(Math.random() * corners.length)];
        
        // Apply position styles
        Object.keys(randomCorner).forEach(key => {
            dice.style[key] = randomCorner[key];
        });
        
        // Set position to absolute for proper placement
        dice.style.position = 'absolute';
    }
});

