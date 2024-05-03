let inputDir = {x:0, y:0}
const foodSound = new Audio('../music/food.mp3')
const gameOverSound = new Audio('../music/gameover.mp3')
const moveSound = new Audio('../music/move.mp3')
const musicSound = new Audio('../music/music.mp3')
let speed = 2
let lastPaintTime = 0
let score = 0
let snakeArray = [
    {
        x: 13,
        y: 15
    }
]
food = {x: 6, y: 7}

//Run the game in loop

//Game functions
function main(ctime){
    window.requestAnimationFrame(main)
    if((ctime - lastPaintTime) / 1000 < 1/speed){ //Controlling the animation frame
        // console.log(ctime)
        return
    }

    lastPaintTime = ctime
    gameEngine()
}

function isCollide(sarr){
    return false
}

function gameEngine(){
    //Part 1: Updating the snake array & food
    //Collition
    if(isCollide(snakeArray)){
        gameOverSound.play()
        inputDir = {x:0, y:0}
        alert("Gave over, press any key to play again!")
        snakeArray = [{x: 13, y: 15}]
        score = 0

    }

    //if snake has eaten the food, increment the score and regenerate the food
    if(snakeArray[0].y === food.y || snakeArray[0].x === food.x){
        snakeArray = unshift({x: snakeArray[0].x + inputDir.x, y: snakeArray[0].y + inputDir.y})
        food = {x: Math.round(a + (b-a)) * Math.random(), y: Math.round(a + (b-a)) * Math.random()}
        let a = 2
        let b = 16
    }

    //Part 2: Displaying the snake & food
    
    //Displaying the snake
    board.innerHTML = ''
    snakeArray.forEach((e, index) => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.x
        snakeElement.style.gridColumnStart = e.y
        
        if(index == 0){
            snakeElement.classList.add('head')
        }else{
            snakeElement.classList.add('snake')
        }

        board.appendChild(snakeElement)
    })
   
        //Displaying the food
        foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.x
        foodElement.style.gridColumnStart = food.y
        foodElement.classList.add('food')
        board.appendChild(foodElement)
    
}

//Main logic starts here
window.requestAnimationFrame(main) //Provides a better application frame and it renders the app nicely
window.addEventListener('keydown', e => {
    inputDir = {x:0, y:1}
    moveSound.play()
    switch(e.key){
        case "ArrowUp": 
            inputDir.x = 0
            inputDir.y = -1
            break
        case "ArrowDown":
            inputDir.x = 0
            inputDir.y = 1
            break
        case "ArrowLeft":
            inputDir.x = -1
            inputDir.y = 0
            break
        case "ArrowRight":
            inputDir.x = 1
            inputDir.y = 0
            break
    }
})

