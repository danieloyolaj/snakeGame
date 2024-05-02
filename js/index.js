let directioni = {x:0, y:0}
const foodSound = new Audio('../music/food.mp3')
const gameOverSound = new Audio('../music/gameover.mp3')
const moveSound = new Audio('../music/move.mp3')
const musicSound = new Audio('../music/music.mp3')
let speed = 2
let lastPaintTime = 0

//Run the game in loop

//Game functions
function main(ctime){
    window.requestAnimationFrame(main)
    if((ctime - lastPaintTime) / 1000 < 1/speed){
        return
    }

    lastPaintTime = ctime
    gameEngine()
}

function gameEngine(){
    //Part 1: Updating the snake array & food


    //Part 2: Displaying the snake & food
}

//Main logic starts here
window.requestAnimationFrame(main) //Provides a better application frame and it renders the app nicely

