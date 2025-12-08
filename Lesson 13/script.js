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



var rateFir
var rateSec



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
  if(deck === null || deck === "null"){  
    let newDeck = await CreateNewDeck()
    console.log(newDeck)
    localStorage.setItem("deck", JSON.stringify(newDeck))
    
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

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}


let id = 0;
document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem("darkTheme")
    console.log("theme: " + theme);
    if(theme != null && theme == "true"){
        document.querySelector("input#themeSwitch").setAttribute("checked", true)
        document.querySelector("#max_div").classList.add("theme-dark")
    }

    document.querySelector("button#Update").addEventListener("click", (event) =>{
      
      fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then(response => response.json())
      .then(async data =>{
        
        console.log(data)
        document.querySelectorAll(".currency").forEach(element =>{
          element.disabled = true
        })
        event.target.disabled = true
        //await sleep(2000)
        for(code in data) {
          let a = document.createElement("option")
          let b = document.createElement("option")
          a.textContent = data[code]
          b.textContent = data[code]
          a.value = code
          b.value = code

          document.querySelector("#currencyFrom").append(a)
          document.querySelector("#currencyTo").append(b)
          document.querySelector("#currencyFrom").value = "uah"
          document.querySelector("#currencyTo").value = "usd"
          

        }
        upd("uah")
        updSec("usd")
      }).finally(()=>{
        document.querySelectorAll(".currency").forEach(element =>{
          element.disabled = false
        })
        event.target.disabled = false
      })


    })

    function update(isFirst){
      let val = document.querySelector("#numbers").value
      let valSec = document.querySelector("#numbersSec").value
      let code = document.querySelector("#currencyFrom").value
      let codeTo = document.querySelector("#currencyTo").value
      if(isFirst){
        document.querySelector("#numbersSec").value = rateFir[codeTo] * val
      }
      else{
        document.querySelector("#numbers").value = rateSec[code] * valSec
      }
    }




    document.querySelector("input#numbers").addEventListener("input", (event) =>{
        update(true)
    })
    document.querySelector("input#numbersSec").addEventListener("input", (event) =>{
        update(false)
    })

    function upd(val){
      console.log()
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${val}.json`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          rateFir = data[val]
        })
    }
    function updSec(val){
      console.log()
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${val}.json`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          rateSec = data[val]
        })
    }


    document.querySelector("#currencyFrom").addEventListener("change", (event) =>{
        upd(event.target.value)
        update(true)
    })
    document.querySelector("#currencyTo").addEventListener("change", (event) =>{
        updSec(event.target.value)  
        update(false)   
    })


    // document.querySelector("Form#form").addEventListener("submit", (event) =>{
    //   event.preventDefault(); 
    //   let val = document.querySelector("#numbers").value
    //   let code = document.querySelector("#currencyFrom").value
    //   let codeTo = document.querySelector("#currencyTo").value

    //   console.log(val)
    //   console.log(code)
    //   console.log(codeTo)

    //   fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${code}.json`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     console.log(data[code])
    //     console.log(data[code][codeTo])
    //     console.log(data[code][codeTo] * val)
    //     document.querySelector("span#sum").textContent = data[code][codeTo] * val
    //   })


    // })


      


    //localStorage.removeItem("deck")
    
    // getDeck()
    // .then(deck => {
    //   console.log(deck)
    //   shuffleDeck(deck).then(()=>{
    //     document.getElementById("drawCard").disabled = false
    //     document.getElementById("drawCard").addEventListener("click", (event)=>{
    //       document.getElementById("drawCard").disabled = true
    //       getDeck().then(deck => {
            
    //         drawCards(deck, 1).then(cards => cards.forEach(element => {
    //           let img = document.createElement("img")
    //           console.log(element)
    //           console.log(element.image)
    //           img.src = element.image
    //           document.querySelector("div.cards").append(img)
    //           document.getElementById("drawCard").disabled = false
    //         })
    //       )
    //       })
    //     })

    //     drawCards(deck, 1).then(cards =>{
    //       console.log(cards)
    //     })
    //   })
      
    // })


    // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json

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


