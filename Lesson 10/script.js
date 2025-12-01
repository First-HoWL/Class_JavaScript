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




function toHex(c){
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

function hexToRgb(hex) {
    let cleanHex = hex.replace('#', '');

    let r = parseInt(cleanHex.substring(0, 2), 16);
    let g = parseInt(cleanHex.substring(2, 4), 16);
    let b = parseInt(cleanHex.substring(4, 6), 16);

    return {r, g, b};
}

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  if (Uint8Array.prototype.toHex) {
    // Use toHex if supported.
    return new Uint8Array(hashBuffer).toHex(); // Convert ArrayBuffer to hex string.
  }
  // If toHex() is not supported, fall back to an alternative implementation.
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
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

let films = 0

function showFilmData(filmData){
  console.log(filmData)
  document.querySelector("#filmName").textContent = filmData.title
  document.querySelector("#Overview").textContent = filmData.overview
  document.querySelector("#Date").textContent = filmData.release_date
  document.querySelector("#daysUntil").textContent = filmData.days_until + "days"
  
  document.querySelector("#filmPoster").src = filmData.poster_url
  films++;
  fetch(`https://www.whenisthenextmcufilm.com/api/?date=${filmData.release_date}`)
    .then(response => response.json())
    .then(filmdata => showNextFilmData(filmdata))

}
function showNextFilmData(filmData){
  if(filmData.following_production == undefined || films >= 40 ){
    return
  }
  films++;
  let Gendiv = document.querySelector("div#NextFilms")
  let div = document.createElement("div")
  div.id = "afterNextFilm";
  div.style.display = "flex"
  div.style.flexDirection = "column"
  div.style.width = "24%"
  let h3 = document.createElement("h3")
  h3.id = "filmName"
  h3.style.marginTop = 0
  h3.style.marginBottom = "10px"
  h3.textContent = filmData.title
  let h4 = document.createElement("h3")
  h4.id = "date"
  h4.style.marginTop = 0
  h4.style.marginBottom = "10px"
  h4.textContent = filmData.release_date
  let img = document.createElement("img")
  img.id = "filmPoster"
  img.src = filmData.poster_url
  


  div.style.marginTop = "10px"

  div.style.padding = "10px"
  div.style.marginRight = "1%"
  div.style.backgroundColor = "gray"

  div.append(h3, h4, img)
  Gendiv.append(div)

  fetch(`https://www.whenisthenextmcufilm.com/api/?date=${filmData.release_date}`)
    .then(response => response.json())
    .then(filmdata => showNextFilmData(filmdata))
}


document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem("darkTheme")
    console.log("theme: " + theme);
    if(theme != null && theme == "true"){
        document.querySelector("input#themeSwitch").setAttribute("checked", true)
        document.querySelector("#max_div").classList.add("theme-dark")
    }

    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then(response => response.json()).then(data =>
      {for(code in data){
        let option = document.createElement("option")
      option.textContent = data[code]
      option.value = code
      document.querySelector("#countrySelect").append(option)
      }
    })



    
    // products.forEach(item => {
    //     let shopGenDiv = document.querySelector("div#shopGenDiv")
    //     let div = document.createElement("div")
    //     let img = document.createElement("div")
    //     let button = document.createElement("button")
    //     img.style.backgroundImage = `url(${item.foto})`
    //     img.classList.add("foto")
    //     let name = document.createElement("span")
    //     name.textContent = item.name
    //     let price = document.createElement("span")
    //     price.textContent = item.price + "$"
    //     button.id = item.id
    //     button.addEventListener("click", (event)=>{
    //       let a = products.filter((item) => item.id == event.target.id)
    //       console.log(event.target.id)
    //       console.log(a)
    //       basket.push(a);
    //       console.log(basket)
    //     })

    //     div.append(img, name, price, button)
        
    //     shopGenDiv.append(div)

    // })
    
    // document.querySelector("button#basket").addEventListener("click", (event)=>{
    //   let shopGenDiv = document.querySelector("div#shopGenDiv")
    //   shopGenDiv.style.display = "none"

    //   basket.forEach(item => {
    //     let shopGenDiv = document.querySelector("div#basketGenDiv")
    //     let div = document.createElement("div")
    //     let img = document.createElement("div")
    //     img.style.backgroundImage = `url(${item.foto})`
    //     img.classList.add("foto")
    //     let name = document.createElement("span")
    //     name.textContent = item.name
    //     let price = document.createElement("span")
    //     price.textContent = item.price + "$"

    //     div.append(img, name, price)
        
    //     shopGenDiv.append(div)

    // })



    //})




    // let login = getCookie("loginPassword")
    // console.log(login)
    // if (login !== null && login != "null" && login !== undefined){
    //     login = JSON.parse(login)
    //     console.log(login)
    //     document.querySelector("p#pKnows").textContent += login.login
    //     document.querySelector("div#divKnows").style.display = "block"
    //     document.querySelector("form#loginForm").style.display = "none"
    // }

    // document.querySelector("button#signOut").addEventListener("click", (event) => {
    //     deleteCookie("loginPassword")
    //     location.reload();
    // })
    
    // document.querySelector("form#loginForm").addEventListener("submit", async (event) => {
    //     event.preventDefault()
    //     let passw = await digestMessage(document.querySelector("input#password").value).then((a) => {return a});
    //     // (async () => {
    //     // }) ();
    //     console.log(passw)
    //     let user = {
    //         login: document.querySelector("input#login").value,
    //         password: passw
    //     }
    //     if(document.querySelector("input#rememberme").checked == true){
    //         setCookie("loginPassword", JSON.stringify(user), {'max-age': 3600})
    //     }
    //     event.target.submit()

    // })


    // let questions = localStorage.getItem("questions")
    // console.log(questions)
    // questions = questions === null ? [] : JSON.parse(questions)
    
    // questions.forEach(item => {

    //     let arr = document.createElement("article")

    //     arr.style.backgroundColor = "grey"
    //     arr.style.padding = "2px"
    //     arr.style.marginTop = "5px"

    //     let p = document.createElement("p")
    //     let A1 = document.createElement("span")
    //     A1.style.backgroundColor = "white"
    //     let br = document.createElement("br")
    //     let A2 = document.createElement("span")
    //     A2.style.backgroundColor = "white"  
    //     p.textContent = item.question
    //     let rnd = randint(0, 2)
    //     if(rnd == 0){
    //         A1.textContent = item.correct
    //         A2.textContent = item.uncorrect
    //     }
    //     else{
    //         A2.textContent = item.correct
    //         A1.textContent = item.uncorrect
    //     }
    //     arr.append(p)
    //     arr.append(A1)
    //     arr.append(br)
    //     arr.append(A2)



    //     document.querySelector("div#questions").append(arr)
    // })


    // document.querySelector("form#CreateTestForm").addEventListener("submit", (event) => {
    //     event.preventDefault()
    //     let Question = {
    //         question: document.querySelector("input#question").value,
    //         correct: document.querySelector("input#correctAnswer").value, 
    //         uncorrect: document.querySelector("input#unCorrectAnswer").value 
    //     }
    //     questions.push(Question)
    //     localStorage.setItem("questions", JSON.stringify(questions))
        
    //     event.target.submit()

    // })


    document.querySelector("input#themeSwitch")
    .addEventListener("click", (event) =>{
        let darkTheme = event.target.checked
        if(darkTheme) document.querySelector("#max_div").classList.add("theme-dark")
        else document.querySelector("#max_div").classList.remove("theme-dark")

        localStorage.setItem("darkTheme", darkTheme)
    })


})



// Homework

function firstfunc(numb){
    let sum = 0;
    for(let i = 0; i < numb; i++){
        if(numb % i == 0){
            sum += i
        }
    }   
    return (sum == numb)
}

function Secfunc(numbers){
    let numbb = []
    for(let i = numbers[0], j; i < numbers[1]; i++){
        if(firstfunc(i) == true)
            numbb.push(parseInt(i));
    }
    return numbb
}

function main(){
    let select = document.querySelector("select#select")
    let input = document.querySelector("input#inputHomework")
    console.log(select.value)
    let selected = select.value
    let inputValue = input.value

    if(selected == 1){
        alert(firstfunc(inputValue))
    }
    if(selected == 2){
        let numbers = []
        for (let i = 0; i < 2; i++){
            numbers[i] = parseInt(inputValue.split(" ")[i])
        }
        console.log(numbers)
        alert(Secfunc(numbers))
    }
    if(selected == 3){
        
    }
}