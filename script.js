let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let cards=[]  //setting empty card
let sum = 0;  //intial value zero
let hasBlackJack = false;  //getting blackjack 
let isAlive = false;   //for player to start game
let message = "";   //for showing message 

// step 1.setting startgame function to get random number
// step2 set randomcard fucntion to get card and setup rule of blackjack
// step 3 setup random function to set value in cards element
//step 4 setup sum elemnt to save value of sum
//step4 setup newcard fucntion

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13 ) + 1
  if (randomNumber >10){
    return 10    //in blackack jack ,queen and king value = 10
  }else if (randomNumber === 1){
    return 11  //Ace = 1 or 11 but we choose 11
  }else{
    return randomNumber
  }
}

function startGame(){
     isAlive= true
     let firstCard = getRandomCard()
     let secondCard = getRandomCard()
     cards = [firstCard , secondCard]
     sum = firstCard + secondCard
     renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards :"
    for(let i = 0 ; i <cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }

sumEl.textContent = "Sum:" + sum
if(sum <= 20){
    message = "DO you want to draw a new cards"
}else if(sum === 21){
    message = "You've got Blackjack"
    hasBlackJack = true;
}else{
    message = "You're out of game"
    isAlive = false;
}
messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
cards.push(card)
renderGame()
    }
}