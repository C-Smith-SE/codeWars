// local storage will keep information for the page through page refreshes without acconts of signing in

localStorage.RemoveItem() 
// removes a item from local storage
localStorage.getItem()
// get a item from local storage
localStorage.setItem()
// set a item in local storage (key,value)
localStorage.clear()
// clears all local storage

// the purpose of the following code was to build a app that would retain how many times a button was clicked in local storage

// the if statement is just checking to see if there is a botscore and if not it is being set to 0
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}


document.querySelector('button').addEventListener('click',addAnothaOne)

function addAnothaOne(){
    let botScoreVal = number(localStorage.getItem('botScore'))
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)
}

// the following code was a card game made during class 27 of 100 devs

// card game name "war"

// two player game where each person draws a card and the person with the higher card wins the round

// api used url:deckofcardsapi.com
let deckId = ""

fetch(add the url here)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

document.querySelector('button').addEventListener('click', drawCard)

function drawCard() {
    const url = `insert url here plugin the deck id`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#player1').src = data.cards[0].image
            document.querySelector('#player2').src = data.cards[1].image
            let player1Val = convertToNum(data.cards[0].value)
            let player2Val = convertToNum(data.cards[1].value)
            if(player1Val > player2Val){
                document.querySelector('h3').innerText = " Player 1 Wins"
            else if( player1Val < player2Val){
                document.querySelector('h3').innerText = " Player 2 Wins"
            }else{
                document.querySelector('h3').innerText = " Time for war"
            }
            }
        })
}

function convertToNum(val){
    if(val === "ACE"){
        return 14
    }else if(val === "KING"){
        return 13
    }else if(val === "QUEEN"){
        return 12
    }else if(val === "JACK"){
        return 11
    }else{
        return Number(val)
    }
}
