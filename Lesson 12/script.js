function bubblesort(array){
    let is_changed = true;
    while (is_changed){
        is_changed = false;
        for (let i = 0; i < array.length - 1; i++){
            if (array[i] > array[i + 1]){
                let a = array[i];
                array[i] = array[i + 1];
                array[i + 1] = a;
                is_changed = true;
            }
        }
    }
    return array;
}


function randint(a, b){
    return Math.floor(Math.random() * (b-a)) + a
}




function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, attributes = {}) {

  attributes = {
    path: '/',
    // за потреби додайте інші типові значення
    ...attributes
  };

  if (attributes.expires instanceof Date) {
    attributes.expires = attributes.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let attributeKey in attributes) {
    updatedCookie += "; " + attributeKey;
    let attributeValue = attributes[attributeKey];
    if (attributeValue !== true) {
      updatedCookie += "=" + attributeValue;
    }
  }

  document.cookie = updatedCookie;
}

// let deck


async function CreateNewDeck(){
  return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then(response => response.json())

}

async function getDeck(){
  let deck = localStorage.getItem("deck")
  if(deck === null){  
    let newDeck = await CreateNewDeck()
    localStorage.setItem("deck", JSON.stringify(deck))
    
  }
  else {
    deck = JSON.parse(deck)
  }
  return deck

}

async function drawCards(deck, count = 1) {
  let response = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=${count}`)
  
  response = await response.json()
  return response.cards
}

async function shuffleDeck(deck) {
  let response = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`)
  
}


let id = 0;
document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem("darkTheme")
    console.log("theme: " + theme);
    if(theme != null && theme == "true"){
        document.querySelector("input#themeSwitch").setAttribute("checked", true)
        document.querySelector("#max_div").classList.add("theme-dark")
    }
    //localStorage.removeItem("deck")
    
    getDeck()
    .then(deck => {
      console.log(deck)
      shuffleDeck(deck).then(()=>{
        document.getElementById("drawCard").disabled = false
        document.getElementById("drawCard").addEventListener("click", (event)=>{
          document.getElementById("drawCard").disabled = true
          getDeck().then(deck => {
            
            drawCards(deck, 1).then(cards =>{
          
              let img = document.createElement("img")
              console.log(cards[0])
              console.log(cards[0].image)
              img.src = cards[0].image
              document.querySelector("div.cards").append(img)
              document.getElementById("drawCard").disabled = false
            })
          })
        })

        drawCards(deck, 1).then(cards =>{
          console.log(cards)
        })
      })
      
    })


  document.querySelector("input#themeSwitch")
  .addEventListener("click", (event) =>{
      let darkTheme = event.target.checked
      if(darkTheme) document.querySelector("#max_div").classList.add("theme-dark")
      else document.querySelector("#max_div").classList.remove("theme-dark")

      setTimeout(()=>{
        localStorage.setItem("darkTheme", darkTheme)
      }, 2000)
      
  })


})


